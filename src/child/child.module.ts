import { Module } from '@nestjs/common';
import { ChildService } from './child.service';
import { ChildController } from './child.controller';

@Module({
  providers: [ChildService],
  controllers: [ChildController],
  exports: [ChildModule],
})
export class ChildModule {}
