import { Injectable, NotAcceptableException } from '@nestjs/common';
import { ChildService } from 'src/child/child.service';
import { ParentService } from 'src/parent/parent.service';

@Injectable()
export class ParentChildService {
  private parentchild: { id: string; parentId: string; childId: string }[] = [];

  constructor(
    private readonly childService: ChildService,
    private readonly parentService: ParentService,
  ) {}

  updateParentChild(parentId: string, childId: string): { id: string; parentId: string; childId: string } {
    const parent = this.parentService.findParent(parentId);
    const child = this.childService.findChild(childId);

    const [parentchild, index] = this.findParentChild(parentId);

    if (childId) {
      parentchild.childId = childId;
    }
    if (parentId) {
      parentchild.parentId = parentId;
    }

    return parentchild;
  }

  findParentChild(id: string): [{ id: string; parentId: string; childId: string }, number] {
    const parentchildIndex = this.parentchild.findIndex(
      (parentchild) => parentchild.id === id,
    );
    if (parentchildIndex === -1) {
      throw new NotAcceptableException(
        `Parent or Child with ID ${id} not found`,
      );
    }

    return [this.parentchild[parentchildIndex], parentchildIndex];
  }
}
