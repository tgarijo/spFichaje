import {Entity, Column, PrimaryGeneratedColumn} from "typeorm";

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

}
