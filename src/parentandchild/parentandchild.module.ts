import { Module } from '@nestjs/common';
import { ParentChildService } from './parentandchild.service';
import { ParentChildController } from './parentandchild.controller';
import { ChildService } from 'src/child/child.service';
import { ParentService } from 'src/parent/parent.service';

@Module({
  imports: [ChildService, ParentService],
  providers: [ParentChildService],
  controllers: [ParentChildController],
})
export class ParentChildModule {}
