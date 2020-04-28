
import {
    Entity, 
    PrimaryGeneratedColumn, 
    Column,
    Unique,
    CreateDateColumn,
    UpdateDateColumn,
    OneToMany,
    ManyToOne,
    BeforeInsert,
    BeforeUpdate,
    JoinColumn

} from "typeorm";


import { Length, validateOrReject } from "class-validator";
import * as bcrypt from "bcryptjs";
import { Company } from "./Company";
import { Role } from "./Role";

@Entity()
@Unique(["username"])
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @Length(4, 20)
    username: string;

    @Column()
    @Length(4,100)
    password: string

    @Column()
    @Length(1,50)
    firstName: string;

    @Column()
    @Length(1,50)
    lastName: string;

    @Column()
    @CreateDateColumn()
    createdAt: Date;

    @Column()
    @UpdateDateColumn()
    updateAt: Date;
    user: Promise<any>;


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

  

    hashPassword() {
        this.password = bcrypt.hashSync(this.password,8);
    }

    checkIfUnencryptedPasswordIsValid(unencryptedPassword:string){
        return bcrypt.compareSync(unencryptedPassword, this.password);
    }

}