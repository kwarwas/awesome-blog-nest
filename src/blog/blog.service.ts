import { Injectable } from '@nestjs/common';
import { BlogDto } from './blog.dto';

@Injectable()
export class BlogService {
  getBlogs(): BlogDto[] {
    return [
      {
        name: 'Blog 1',
        date: new Date(),
      },
      {
        name: 'Blog 2',
        date: new Date(),
      },
    ];
  }
}
