import {
    Entity,
    Column, 
    PrimaryGeneratedColumn, 
    ManyToOne,
    BeforeInsert,
    BeforeUpdate
} from "typeorm";

import { IRole } from "./IRole";
import { validateOrReject } from "class-validator";


@Entity()
export class Role implements IRole {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        length: 25,
        nullable: false
    })
    name: string;

    @BeforeInsert()
    @BeforeUpdate()
    async validate() {
      await validateOrReject(this);
    }
}