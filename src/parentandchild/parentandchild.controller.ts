import { Controller, Put, Param, Body } from '@nestjs/common';
import { ParentChildDto } from './dto';
import { IdDto } from 'src/common/decorators';
import { ParentChildService } from './parentandchild.service';
import { ParentChild } from './type';

@Controller('parentchild')
export class ParentChildController {
  constructor(private readonly parentchildService: ParentChildService) {}

  @Put('child/:childId')
  updateChild(
    @Param() params: IdDto,
    @Body() body: ParentChildDto,
  ): ParentChild {
    const { childId } = params;
    return this.parentchildService.updateChild(
      childId,
      body.parentId,
      body.childId,
    );
  }

  @Put('parent/:parentId')
  updateParent(
    @Param() params: IdDto,
    @Body() body: ParentChildDto,
  ): ParentChild {
    const { parentId } = params;
    return this.parentchildService.updateParent(
      parentId,
      body.parentId,
      body.childId,
    );
  }
}
