import {MigrationInterface, QueryRunner} from "typeorm";

export class Init1606588264528 implements MigrationInterface {
    name = 'Init1606588264528'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "blog_entity" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "date" TIMESTAMP NOT NULL, CONSTRAINT "PK_a47f5df4eee558a88031ed72821" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "blog_entity"`);
    }

}
