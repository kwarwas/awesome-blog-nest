import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class BlogEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  date: Date;
}
