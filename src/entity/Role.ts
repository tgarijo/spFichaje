import {
    Entity,
    Column, 
    BeforeInsert,
    BeforeUpdate,
    OneToMany,
} from "typeorm";


import { validateOrReject } from "class-validator";
import { User } from "./User";
import { Content } from "./Content";


@Entity()
export class Role extends Content {

    @Column({
        type: "varchar",
        length: 25,
        nullable: false
    })
    name: string;

    @OneToMany(type => User, user => user.role) // apunta al many to Oner
    user: User[];

    

    @BeforeInsert()
    @BeforeUpdate()
    async validate() {
      await validateOrReject(this);
    }

   
}