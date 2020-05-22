import { Entity, Column, PrimaryGeneratedColumn, OneToOne } from 'typeorm'
import { Hobbie } from './Hobbie';

@Entity()
export class User {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 55,
  })
  name: string;

  @Column()
  age: string;

  @OneToOne(type => Hobbie, hobbie => hobbie.user, { cascade: true })
  hobbie: number[];

}