import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { Child } from './type';

@Injectable()
export class ChildService {
  private chidren: Child[] = [];

  insertChild(firstName: string, lastName: string): string {
    const childId = uuidv4();
    this.chidren.push(new Child(childId, firstName, lastName));
    return childId;
  }

  getChild(): Child[] {
    return this.chidren;
  }

  getSingleChild(childId: string): Child {
    const [child] = this.findChild(childId);
    return child;
  }

  updateChild(
    childId: string,
    firstName: string,
    lastName: string,
  ): Child {
    const [child] = this.findChild(childId);
    if (firstName) {
      child.firstName = firstName;
    }
    if (lastName) {
      child.lastName = lastName;
    }

    return child;
  }

  deleteChild(childId: string) {
    const [, index] = this.findChild(childId);
    this.chidren.splice(index, 1);
    return { message: ' Usjesno obrisano' };
  }

  findChild(id: string): [Child, number] {
    const childIndex = this.chidren.findIndex((parent) => parent.id === id);
    if (childIndex === -1) {
      throw new NotFoundException(`Child with ID ${id} not found`);
    }
    return [this.chidren[childIndex], childIndex];
  }
}
