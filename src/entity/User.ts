
import {
    Entity, 
    Column,
    Unique,
     OneToMany,
    ManyToOne,
    BeforeInsert,
    BeforeUpdate,
    JoinColumn

} from "typeorm";


import { validateOrReject, IsEmail, IsNotEmpty } from "class-validator";
import * as bcrypt from "bcryptjs";

import { Role } from "./Role";
import { Center } from "./Center";
import { Content } from "./Content";

@Entity()
export  class User extends Content {

    
    @Column({
        type: "varchar",
        length: 25
    })
    username: string;

    @Column({
        type: "varchar",
        length: 100,
        nullable: false
    })
    password: string

    @Column({
        type: "varchar",
        length: 50,
        nullable: false
    })
    firstName: string;

    @Column({
        type: "varchar",
        length: 50,
        nullable: true
    })
    lastName: string;

    @Column({
        type: "varchar",
        length: 50,
        nullable: true
    })
    @IsEmail({
        unique: true
        }, { message: 'Incorrect email' })
    @IsNotEmpty({ message: 'The email is required' })
    email: string;

    @Column()
    isActive: boolean;

    @BeforeInsert()
    setPassword() {
        this.hashPassword();
    }
    @BeforeUpdate()
    async validate() {
      await validateOrReject(this);
    }
    
   
    @ManyToOne(type => Role, role => role.user) // Apunta a @OneToMany
    @JoinColumn()
    role: Role;

    // @OneToMany(type => Center, center => center.user) // apunta al many to Oner
    // center: Center[];

    
    @ManyToOne(type => Center, center => center.user) // Apunta a @OneToMany
    @JoinColumn()
    center: Center;


    hashPassword() {
        this.password = bcrypt.hashSync(this.password,8);
    }

    checkIfUnencryptedPasswordIsValid(unencryptedPassword:string){
        return bcrypt.compareSync(unencryptedPassword, this.password);
    }

}