import { Injectable } from '@nestjs/common';
import { ChildService } from 'src/child/child.service';
import { ParentService } from 'src/parent/parent.service';
import { ParentChild } from './type';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class ParentChildService {
  private parentchild: ParentChild[] = [];

  constructor(
    private readonly childService: ChildService,
    private readonly parentService: ParentService,
  ) {}

  createParentChild(parentId: string, childId: string) {
    this.parentService.findParent(parentId);
    this.childService.findChild(childId);

    const id = uuidv4();

    this.parentchild.push(new ParentChild(id, parentId, childId));
  }
}
