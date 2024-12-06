import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable, OneToOne, JoinColumn } from 'typeorm';
import { profile } from 'console';
import { Profile } from './users/profile';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column({ nullable: true })
  lastName: string;

  @Column({ default: true })
  isActive: boolean;

  @Column({ nullable: true })
  address: string;

  @Column({ nullable: true })
  age: string;

  @OneToOne (() => Profile, { cascade: true })
  
  @JoinColumn()
  profile: Profile;
  
}
