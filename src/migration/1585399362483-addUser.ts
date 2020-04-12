import {MigrationInterface, QueryRunner} from "typeorm";
import {  getManager } from "typeorm";
import * as bcrypt from "bcryptjs";
import { RoleController } from '../controllers/RoleController';
import { Role } from '../entity/Role';
import { User } from "../entity/User";
import { UserController } from "../controllers/UserController";


export class addUser1585399362483 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        let password = bcrypt.hashSync('user_p', 8)

        let roleController = new RoleController();
        let role =roleController.getById(1);

        let roleIdenty: Role  = Object.setPrototypeOf(role, Role.prototype)
        
        let userIndenty: User = new User();
        userIndenty.firstName="Tomas";
        userIndenty.lastName="Garijo";
        userIndenty.password = password;
        userIndenty.role = roleIdenty;

        //await new UserController().save

        //roleController.getById()
        
        await queryRunner.query(
            `INSERT INTO user (name, password) 
            VALUES("user_1", ${password})`);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
    }

}
