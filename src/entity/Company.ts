import {
    Entity,
    Column, 
    OneToMany, 

} from "typeorm";

import { Center } from "./Center"
import { Content } from "./Content";


@Entity()
export class Company extends Content{

    @Column({
        type: "varchar",
        length: 100, 
        nullable: false
    })
    name: string;

    @Column({
        type: "varchar",
        length: 100, 
        nullable: true
    })
    adress: string;

    @Column({
        type: "varchar",
        length: 255, 
        nullable: true
    })
    image: string

    @OneToMany(type => Center, center => center.company) // apunta al many to Oner
    center: Center[];
}
