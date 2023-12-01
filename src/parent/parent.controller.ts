import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ParentService } from './parent.service';
import { ParentDto } from './dto';
import { IdDto } from 'src/common/decorators';
import { Parent } from './type';

@Controller('parent')
export class ParentController {
  constructor(private readonly parentService: ParentService) {}

  @Post()
  addParent(@Body() body: ParentDto): { id: string } {
    const generatedId = this.parentService.insertParent(
      body.firstName,
      body.lastName,
    );
    return { id: generatedId };
  }

  @Get()
  getAllParents(): Parent[] {
    return this.parentService.getParent();
  }

  @Get(':id')
  getParentById(@Param() params: IdDto): Parent {
    const { id } = params;
    return this.parentService.getSingleParent(id);
  }

  @Put(':id')
  updateParent(@Param() params: IdDto, @Body() body: ParentDto): Parent {
    const { id } = params;
    return this.parentService.updateParent(id, body.firstName, body.lastName);
  }

  @Delete(':id')
  deleteParentById(@Param() params: IdDto): { message: string } {
    return this.parentService.deleteParent(params.id);
  }
}
