import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ParentModule } from './parent/parent.module';
import { ChildModule } from './child/child.module';

@Module({
  imports: [ParentModule, ChildModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
