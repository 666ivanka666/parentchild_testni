import { Module } from '@nestjs/common';
import { ParentModule } from './parent/parent.module';
import { ChildModule } from './child/child.module';
import { ParentChildModule } from './parentandchild/parentandchild.module';

@Module({
  imports: [ParentModule, ChildModule, ParentChildModule],
})
export class AppModule {}
