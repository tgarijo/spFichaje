import {MigrationInterface, QueryRunner} from "typeorm";

export class addCompany1585399103760 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`INSERT INTO company (name, adress) VALUES(
            "Company 1",
            "Direccion 1"
            )`);
        await queryRunner.query(`INSERT INTO company (name, adress) VALUES(
            "Company 2",
            "Direccion 2"
            )`);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`DELETE FROM "company"`);
        await queryRunner.query('TRUNCATE TABLE "company"');
       
    }

}
