import {MigrationInterface, QueryRunner} from "typeorm";

export class stopDescription1589184119851 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`INSERT INTO stopdescription (name)
        VALUES('Entrada')`);
        await queryRunner.query(`INSERT INTO stopdescription (name)
        VALUES('Salida')`);
        await queryRunner.query(`INSERT INTO stopdescription (name)
        VALUES('Entrada Comida')`);
        await queryRunner.query(`INSERT INTO stopdescription (name)
        VALUES('Salida Comida')`);
        await queryRunner.query(`INSERT INTO stopdescription (name)
        VALUES('Asuntos Propios')`);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
    }

}
