import { Body, Controller, Get, Logger, Post } from '@nestjs/common';
import { BlogDto } from './blog.dto';
import { BlogService } from './blog.service';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiTags,
} from '@nestjs/swagger';

@ApiTags('blog')
@Controller('blog')
export class BlogController {
  private readonly logger = new Logger(BlogController.name);

  constructor(private readonly blogService: BlogService) {}

  @Get()
  blogs(): BlogDto[] {
    return this.blogService.getBlogs();
  }

  @Post()
  @ApiCreatedResponse({
    description: 'Created',
  })
  @ApiBadRequestResponse()
  create(@Body() blog: BlogDto): void {
    this.logger.log('create');
  }
}
