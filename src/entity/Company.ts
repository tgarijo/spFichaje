import {
    Entity,
    Column, 
    PrimaryGeneratedColumn, 
    ManyToOne
} from "typeorm";


import { User } from './User'

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

    // @ManyToOne(type => User, user => user.id)
    // user: User;
}
