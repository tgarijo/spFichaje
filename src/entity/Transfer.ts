import { Entity, Column, ManyToOne, JoinColumn, BeforeUpdate } from "typeorm";
import { Content } from "./Content";
import { User } from "./User";
import { Center } from "./Center";
import { validateOrReject } from "class-validator";
import { Stopdescription } from "./StopDescription";

@Entity()
export class Transfer extends Content {

  @Column({
    type: "datetime"
  })
  start: Date;

  @Column({
    type: "datetime"
  })
  end: Date;

  @BeforeUpdate()
  async validate() {
    await validateOrReject(this);
  }
  
  @ManyToOne(type => User, user => user) // Apunta a @OneToMany
  @JoinColumn()
  user: User;

  @ManyToOne(type => Center, center => center) // Apunta a @OneToMany
  @JoinColumn()
  center: Center;

  @ManyToOne(type => Stopdescription, stopDescription => stopDescription) // Apunta a @OneToMany
  @JoinColumn()
  stopDescription: Stopdescription;
}