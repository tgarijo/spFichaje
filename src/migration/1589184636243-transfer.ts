import {MigrationInterface, QueryRunner} from "typeorm";
import  moment from 'moment'
export class transfer1589184636243 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        const start   =  moment(new Date()).format("YYYY-MM-DD HH:mm:ss");
        const end =  moment(new Date()).format("YYYY-MM-DD HH:mm:ss");

        await queryRunner.query(`INSERT INTO transfer (start, end, userId, centerId, stopDescriptionId)
         VALUES('${start}','${end}',1,1,1)`);

         await queryRunner.query(`INSERT INTO transfer (start, end, userId, centerId, stopDescriptionId)
         VALUES('${start}','${end}',2,2,2)`);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
    }

}
