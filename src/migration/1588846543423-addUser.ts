import {MigrationInterface, QueryRunner} from "typeorm";
import * as bcrypt from "bcryptjs";
export class addUser1588846543423 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        const  password = bcrypt.hashSync('user_p', 8)

        await queryRunner.query(`
            INSERT INTO user 
                (
                    username,
                    password,
                    firstname,
                    lastname,
                    email,
                    isActive,
                    roleId,
                    centerId
                ) VALUES
                (
                    "tgarijo",
                    "${password}",
                    "Tomas", 
                    "Garijo",
                    "tgarijo@gmail.com",
                    true,
                    1,
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
                    roleId,
                    centerId
                ) VALUES
                (
                    "jgarcia",
                    "${password}",
                    "Juan", 
                    "Garcia",
                    "jgarcia@gmail.com",
                    false,
                    1,
                    2
                )
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
    }

}
