import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from 'typeorm'
import { User } from './User';

@Entity()
export class Hobbie {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToOne(type => User, user => user.hobbie)
  @JoinColumn()
  user: number
}
