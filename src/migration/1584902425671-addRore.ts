
import {MigrationInterface, QueryRunner} from "typeorm";

export class addRore1584902425671 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
          await queryRunner.query(`INSERT INTO role (name) VALUES("ADMIN")`);
          await queryRunner.query(`INSERT INTO role (name) VALUES("USER")`);
          await queryRunner.query(`INSERT INTO role (name) VALUES("H.RESOURCES")`);
          await queryRunner.query(`INSERT INTO role (name) VALUES("MANAGER")`);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`DELETE FROM "roles"`);
    }

}
