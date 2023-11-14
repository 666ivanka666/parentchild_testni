import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { Child } from './type';

@Injectable()
export class ChildService {
  private child: Child[] = [];

  insertChild(firstName: string, lastName: string, parentId: string): string {
    const childId = uuidv4();
    this.child.push(new Child(childId, firstName, lastName, parentId));
    return childId;
  }

  getChild(): Child[] {
    return this.child;
  }

  getSingleChild(childId: string): Child {
    const [child] = this.findChild(childId);
    return child;
  }

  updateChild(
    childId: string,
    firstName: string,
    lastName: string,
    parentId: string,
  ): Child {
    const [child] = this.findChild(childId);
    if (firstName) {
      child.firstName = firstName;
    }
    if (lastName) {
      child.lastName = lastName;
    }
    if (parentId) {
      child.parentId = parentId;
    }
    return child;
  }

  deleteChild(childId: string) {
    const [child, index] = this.findChild(childId);
    this.child.splice(index, 1);
    return { message: ' Usjesno obrisano' };
  }

  findChild(id: string): [Child, number] {
    const childIndex = this.child.findIndex((child) => child.id === id);
    if (childIndex === -1) {
      throw new NotFoundException(`Child with ID ${id} not found`);
    }
    return [this.child[this.childIndex], this.childIndex];
  }
}
