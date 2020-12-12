import { Module } from '@nestjs/common';
import { BlogController } from './blog/blog.controller';
import { BlogService } from './blog/blog.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BlogEntity } from './blog/blog.entity';

@Module({
  imports: [TypeOrmModule.forRoot(), TypeOrmModule.forFeature([BlogEntity])],
  controllers: [BlogController],
  providers: [BlogService],
  exports: [],
})
export class AppModule {}
