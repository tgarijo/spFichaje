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
                roleId
            ) VALUES
            (
                "tgarijo",
                "${password}",
                "Tomas", 
                "Garijo",
                1
            )
        `);
        
        // let roleController = new UserService(Role);
        // let role = await roleController.getById(1);


        // let roleIdenty: Role  = Object.setPrototypeOf(role, Role.prototype)

        // console.log("Role: ", role );

        // console.log("roleIdenty: ", roleIdenty);
       
        
        // let userIndenty: User = new User();
        // userIndenty.username = "tgarijo";
        // userIndenty.firstName="Tomas";
        // userIndenty.lastName="Garijo";
        // userIndenty.password = password;
        // userIndenty.createdAt = new Date();
        // userIndenty.updateAt = new Date();
        // userIndenty.role = roleIdenty;
        // //console.log(JSON.stringify(userIndenty));

        // await new UserService(User).save(userIndenty);

        //roleController.getById()
        
       
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`DELETE FROM user where username="tgarijo"`);
    }

}
