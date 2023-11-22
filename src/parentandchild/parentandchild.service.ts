// import { Injectable, NotAcceptableException } from '@nestjs/common';
// import { ChildService } from 'src/child/child.service';
// import { ParentService } from 'src/parent/parent.service';

// @Injectable()
// export class ParentChildService {
//   private parentchild: ParentChild[] = [];

//   constructor(
//     private readonly childService: ChildService,
//     private readonly parentService: ParentService,
//   ) {}

//   updateParentChild(parentId: string, childId: string): ParentChild {
//     this.childService.findChild(childId);
//     this.parentService.findParent(parentId);

//     const [parentchild] = this.findParentChild(childId);

//     if (childId) {
//       parentchild.childId = childId;
//     }
//     if (parentId) {
//       parentchild.parentId = parentId;
//     }

//     return parentchild;
//   }

//   findParentChild(id: string): [ParentChild, number] {
//     const parentchildIndex = this.parentchild.findIndex(
//       (parentchild) => parentchild.id === id,
//     );
//     if (parentchildIndex === -1) {
//       throw new NotAcceptableException(
//         `Parent or Child with ID ${id} not found`,
//       );
//     }

//     return [this.parentchild[parentchildIndex], parentchildIndex];
//   }
// }



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
    this.childService.findChild(childId);
    this.parentService.findParent(parentId);

    const [parentchild] = this.findParentChild(childId);

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