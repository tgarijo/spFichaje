import {MigrationInterface, QueryRunner} from "typeorm";

export class addCenter1588846531371 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(
            `INSERT INTO center 
            (
                name,
                companyId
                ) VALUES("Center 1",1)`);
        
        await queryRunner.query(
            `INSERT INTO center 
            (
                name,
                companyId
                ) VALUES("Center 2",2)`);
        
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
    }

}
