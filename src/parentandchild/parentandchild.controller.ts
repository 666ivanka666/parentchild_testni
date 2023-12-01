import { Controller, Put, Param, Body } from '@nestjs/common';
import { ParentChildDto } from './dto';
import { ParentChildService } from './parentandchild.service';

@Controller('parentchild')
export class ParentChildController {
  constructor(private readonly parentchildService: ParentChildService) {}

  @Put('child/:childId')
  updateChild(
    @Param('childId') childId: string,
    @Body() body: ParentChildDto,
  ): { message: string } {
    this.parentchildService.updateParentChild(
      childId,
      body.parentId,
   
    );

    return { message: 'Child updated successfully' };
  }

  @Put('parent/:parentId')
  updateParent(
    @Param('parentId') parentId: string,
    @Body() body: ParentChildDto,
  ): { message: string } {
    this.parentchildService.updateParentChild(
      parentId,
      body.parentId,
    
    );

    return { message: 'Parent updated successfully' };
  }
}
