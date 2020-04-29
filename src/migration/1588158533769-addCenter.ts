import {MigrationInterface, QueryRunner} from "typeorm";

export class addCenter1588158533769 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(
            `INSERT INTO center 
            (
                name,
                companyId,
                userId
                ) VALUES("Center 1",1,1)`);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
    }

}
