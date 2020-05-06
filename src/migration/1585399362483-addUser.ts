import {MigrationInterface, QueryRunner} from "typeorm";
import {  getManager } from "typeorm";
import * as bcrypt from "bcryptjs";
import { RoleService } from '../Service/RoleService';
import { Role } from '../entity/Role';
import { User } from "../entity/User";
import { UserService } from "../Service/UserService";

//npm run typeorm migration:run   
//npm run typeorm migration:revert

export class addUser1585399362483 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        let password = bcrypt.hashSync('user_p', 8)

        await queryRunner.query(`
            INSERT INTO user 
                (
                    username,
                    password,
                    firstname,
                    lastname,
                    email,
                    isActive,
                    roleId
                ) VALUES
                (
                    "tgarijo",
                    "${password}",
                    "Tomas", 
                    "Garijo",
                    "tgarijo@gmail.com",
                    true,
                    1
                )
        `);
        
        await queryRunner.query(`
            INSERT INTO user 
                (
                    username,
                    password,
                    firstname,
                    lastname,
                    email,
                    isActive,
                    roleId
                ) VALUES
                (
                    "jgarcia",
                    "${password}",
                    "Juan", 
                    "Garcia",
                    "jgarcia@gmail.com",
                    false,
                    1
                )
        `);

    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`DELETE FROM user where username="tgarijo"`);
    }

}
