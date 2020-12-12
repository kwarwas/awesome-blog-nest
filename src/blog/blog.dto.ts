import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class BlogDto {
  @ApiProperty()
  @IsNotEmpty()
  name: string;

  @ApiProperty()
  date: Date;

  constructor(name: string, date: Date) {
    this.name = name;
    this.date = date;
  }
}
