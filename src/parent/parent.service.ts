import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { Parent } from './type';
import { ChildService } from 'src/child/child.service';


@Injectable()
export class ParentService {
    private parents: Parent[] = [];
    constructor(private readonly childService: ChildService) {}

    insertParent(firstName:string, lastName: string, childId: string): string {
        const parentId = uuidv4();
        this.parents.push( new Parent(parentId, firstName, lastName, childId));
        return parentId;
    }
    getParent(): Parent [] {
        return this.parents;
    }
    getSingleParent(parentId: string): Parent {
        const [parent] = this.findParent(parentId);
        return parent;
    }
    updateParent(parentid:string, firstName:string, lastName: string, childId: string): Parent {
        const [parent] = this.findParent(parentid);

        if (firstName) {
            parent.firstName = firstName;
        }
        
        if (lastName) {
            parent.lastName = lastName;
        }

        if (childId) {
            parent.childId = childId;
        }
    }
    deleteParent(parentId: string) {
        const [, index] = this.findParent(parentId);
        this.parents.splice(index, 1);
        return { message: 'Uspjesno obrisano' };
      }
    
      findParent(id: string): [Parent, number] {
        const parentIndex = this.parents.findIndex((parent) => parent.id === id);
        if (parentIndex === -1) {
          throw new NotFoundException(`Parent with ID ${id} not found`);
        }
        return [this.parents[parentIndex], parentIndex];
      }
    }

