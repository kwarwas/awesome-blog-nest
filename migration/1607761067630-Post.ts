import {MigrationInterface, QueryRunner} from "typeorm";

export class Post1607761067630 implements MigrationInterface {
    name = 'Post1607761067630'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "post_entity" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, "body" character varying NOT NULL, "date" TIMESTAMP NOT NULL, "blogId" integer, CONSTRAINT "PK_58a149c4e88bf49036bc4c8c79f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "post_entity" ADD CONSTRAINT "FK_b88e1216e913cd0c49878ec3c04" FOREIGN KEY ("blogId") REFERENCES "blog_entity"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "post_entity" DROP CONSTRAINT "FK_b88e1216e913cd0c49878ec3c04"`);
        await queryRunner.query(`DROP TABLE "post_entity"`);
    }

}
