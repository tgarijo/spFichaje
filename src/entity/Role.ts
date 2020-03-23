import {
    Entity,
    Column, 
    PrimaryGeneratedColumn, 
    ManyToOne
} from "typeorm";

import { IEntity } from './IEntity'

@Entity()
export class Role implements IEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        length: 25,
        nullable: false
    })
    name: string;
}