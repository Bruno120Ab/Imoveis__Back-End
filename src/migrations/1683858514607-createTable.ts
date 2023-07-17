import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTable1683858514607 implements MigrationInterface {
    name = 'CreateTable1683858514607'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "schedules" DROP CONSTRAINT "FK_e61e0268dc44647ddc3d674dfe8"`);
        await queryRunner.query(`ALTER TABLE "schedules" RENAME COLUMN "usersId" TO "userId"`);
        await queryRunner.query(`ALTER TABLE "schedules" ADD CONSTRAINT "FK_19c54f24597b318be3892114c75" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "schedules" DROP CONSTRAINT "FK_19c54f24597b318be3892114c75"`);
        await queryRunner.query(`ALTER TABLE "schedules" RENAME COLUMN "userId" TO "usersId"`);
        await queryRunner.query(`ALTER TABLE "schedules" ADD CONSTRAINT "FK_e61e0268dc44647ddc3d674dfe8" FOREIGN KEY ("usersId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
