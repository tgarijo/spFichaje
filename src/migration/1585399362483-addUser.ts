import {MigrationInterface, QueryRunner} from "typeorm";

export class addUser1585399362483 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`INSERT INTO user (name) VALUES("ADMIN")`);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
    }

}