import { Module } from '@nestjs/common';
import { BlogController } from './blog/blog.controller';
import { BlogService } from './blog/blog.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forRoot()],
  controllers: [BlogController],
  providers: [BlogService],
  exports: [],
})
export class AppModule {}
