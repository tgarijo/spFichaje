import {
    Entity,
    Column, 
    PrimaryGeneratedColumn,
    OneToMany, 

} from "typeorm";

import { Center } from "./Center"


@Entity()
export class Company {

    constructor() {}
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        length: 200,
        nullable: false
    })
    name: string;

    @Column({
        nullable: true
    })
    image: string

    @OneToMany(type => Center, center => center.company) // apunta al many to Oner
    center: Center[];
}
