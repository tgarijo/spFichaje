
import {
    Entity, 
    PrimaryGeneratedColumn, 
    Column,
    Unique,
    CreateDateColumn,
    UpdateDateColumn

} from "typeorm";
import { Length, IsNotEmpty } from "class-validator";
import * as bcrypt from "bcryptjs";

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

    hashPassword() {
        this.password = bcrypt.hashSync(this.password,8);
    }

    checkIfUnencryptedPasswordIsValid(unencryptedPassword:string){
        return bcrypt.compareSync(unencryptedPassword, this.password);
    }

}