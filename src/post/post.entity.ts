import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { BlogEntity } from '../blog/blog.entity';

@Entity()
export class PostEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  body: string;

  @Column()
  date: Date;

  @ManyToOne(() => BlogEntity, (blog) => blog.posts)
  blog: BlogEntity;
}
