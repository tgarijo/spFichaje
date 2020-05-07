import { Entity, Column, ManyToOne, JoinColumn, OneToMany } from "typeorm";
import { Content } from "./Content";
import { User } from "./User";
import { Center } from "./Center";
import { Role } from "./Role";


@Entity()
export class Tranfer extends Content {

  @Column({
    type: "datetime"
  })
  start: Date;

  @Column({
    type: "datetime"
  })
  end: Date;

  @ManyToOne(type => User, user => user) // Apunta a @OneToMany
  @JoinColumn()
  user: User;

  @ManyToOne(type => Center, center => center) // Apunta a @OneToMany
  @JoinColumn()
  center: Center;

  // @OneToMany(type => User, user => user) // apunta al many to Oner
  // user: User[];

  // @OneToMany(type => Center, center => center) // apunta al many to Oner
  // center: Center[];
}