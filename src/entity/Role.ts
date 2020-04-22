import {
    Entity,
    Column, 
    PrimaryGeneratedColumn, 
    BeforeInsert,
    BeforeUpdate,
    OneToMany
} from "typeorm";

import { IRole } from "./IRole";
import { validateOrReject } from "class-validator";
import { User } from "./User";


@Entity()
export class Role implements IRole {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        length: 25,
        nullable: false
    })
    name: string;

    @OneToMany(type => User, user => user.id)
    user: User[];

    @BeforeInsert()
    @BeforeUpdate()
    async validate() {
      await validateOrReject(this);
    }

   
}