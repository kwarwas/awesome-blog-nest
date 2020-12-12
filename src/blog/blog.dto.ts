import { ApiProperty } from '@nestjs/swagger';

export class BlogDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  date: Date;
}
