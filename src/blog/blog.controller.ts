import {
  Body,
  Controller,
  Delete,
  Get,
  Logger,
  Param,
  Post,
  Put,
} from '@nestjs/common';
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
  async blogs(): Promise<BlogDto[]> {
    return await this.blogService.getBlogs();
  }

  @Get(':id')
  blog(@Param('id') id: number): Promise<BlogDto> {
    return this.blogService.getBlog(id);
  }

  @Post()
  @ApiCreatedResponse({
    description: 'Created',
  })
  @ApiBadRequestResponse()
  create(@Body() blog: BlogDto): Promise<void> {
    return this.blogService.createBlog(blog);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() blog: BlogDto): Promise<void> {
    return this.blogService.updateBlog(id, blog);
  }

  @Delete(':id')
  delete(@Param('id') id: number): Promise<void> {
    return this.blogService.deleteBlog(id);
  }
}
