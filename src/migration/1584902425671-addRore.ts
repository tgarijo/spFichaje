
import {MigrationInterface, QueryRunner} from "typeorm";

export class addRore1584902425671 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
          await queryRunner.query(`INSERT INTO "roles" (name) VALUES("ADMIN")`);
          await queryRunner.query(`INSERT INTO "roles" (name) VALUES("USER")`);
          await queryRunner.query(`INSERT INTO "roles" (name) VALUES("H.RESOURCES")`);
          await queryRunner.query(`INSERT INTO "roles" (name) VALUES("MANAGER")`);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`DELETE FROM "roles"`);
    }

}
