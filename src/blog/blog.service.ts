import { BadRequestException, Injectable, Logger } from '@nestjs/common';
import { BlogDto } from './blog.dto';
import { BlogEntity } from './blog.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class BlogService {
  private readonly logger = new Logger(BlogService.name);

  constructor(
    @InjectRepository(BlogEntity)
    private blogRepository: Repository<BlogEntity>,
  ) {}

  async getBlogs(): Promise<BlogDto[]> {
    this.logger.log('getBlogs');
    const data = await this.blogRepository.find();
    return data.map((x) => new BlogDto(x.name, x.date));
  }

  async getBlog(id: number): Promise<BlogDto> {
    this.logger.log('getBlog');
    const data = await this.blogRepository.findOne(id);

    if (data) {
      return new BlogDto(data.name, data.date);
    } else {
      throw new BadRequestException();
    }
  }

  async createBlog(blog: BlogDto): Promise<void> {
    this.logger.log('createBlog');
    await this.blogRepository.insert(blog);
  }

  async deleteBlog(id: number) {
    this.logger.log('deleteBlog');
    await this.blogRepository.delete(id);
  }

  async updateBlog(id: number, blogDto: BlogDto): Promise<void> {
    this.logger.log('updateBlog');
    const entity = await this.blogRepository.preload({
      id: +id,
      ...blogDto,
    });
    await this.blogRepository.save(entity);
  }
}
