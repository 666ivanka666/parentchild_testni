import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class ParentChildDto {
  @IsString()
  @IsNotEmpty()
  firstName: string;

  @IsString()
  @IsNotEmpty()
  lastName: string;

  @IsString()
  @IsNotEmpty()
  @IsUUID()
  parentId: string;

  @IsString()
  @IsNotEmpty()
  @IsUUID()
  childId: string;
}
