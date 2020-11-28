import { Controller, Get } from '@nestjs/common';
import { BlogDto } from './blog.dto';
import { BlogService } from './blog.service';

@Controller('blog')
export class BlogController {
  constructor(private readonly blogService: BlogService) {}

  @Get()
  blogs(): BlogDto[] {
    return this.blogService.getBlogs();
  }
}
