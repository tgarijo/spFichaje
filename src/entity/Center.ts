import { Entity,  Column,  ManyToOne, JoinColumn, OneToMany } from "typeorm";
import { Company } from "./Company";

import { User } from "./User";
import { Content } from "./Content";

@Entity()
export class Center extends Content{

  @Column({
    type: "varchar",
    length: 100, 
    nullable: false
  })
  name: string

  @ManyToOne(type => Company, company => company.center) // Apunta a @OneToMany
  @JoinColumn()
  company: Company;
  
  @OneToMany(type => User, user => user.center) // apunta al many to Oner
  user: User[];
  // @ManyToOne(type => User, user => user.center) // Apunta a @OneToMany
  // @JoinColumn()
  // user: User; 
}