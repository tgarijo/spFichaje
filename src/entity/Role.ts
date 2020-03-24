import {
    Entity,
    Column, 
    PrimaryGeneratedColumn, 
    ManyToOne
} from "typeorm";


export class Role  {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        length: 25,
        nullable: false
    })
    name: string;
}