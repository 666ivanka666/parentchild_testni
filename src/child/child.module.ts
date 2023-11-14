import { Module } from '@nestjs/common';
import { ChildService } from './child.service';
import { ChildController } from './child.controller';
import { ParentModule } from 'src/parent/parent.module';


@Module({
  imports: [ParentModule],
  providers: [ChildService],
  controllers: [ChildController],
  exports:[ChildModule],
})
export class ChildModule {}




