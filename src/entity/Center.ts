import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from "typeorm";
import { Length } from "class-validator";
import { Company } from "./Company";

import { User } from "./User";

@Entity()
export class Center {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @Length(25)
  name: string

  @Column()
  @CreateDateColumn()
  createdAt: Date;

  @Column()
  @UpdateDateColumn()
  updateAt: Date;


  @ManyToOne(type => Company, company => company.center) // Apunta a @OneToMany
  @JoinColumn()
  company: Company;
  
  @ManyToOne(type => User, user => user.center) // Apunta a @OneToMany
  @JoinColumn()
  user: User;
  
}