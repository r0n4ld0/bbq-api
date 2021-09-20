import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from "typeorm";

export class CreateBarbecues1632078512021 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "barbecues",
        columns: [
          { name: "id", type: "uuid", isPrimary: true },
          { name: "date", type: "date", isNullable: false },
          { name: "description", type: "varchar" },
          { name: "observation", type: "varchar", isNullable: true },
          { name: "value_with_drinks", type: "numeric", default: 0 },
          { name: "value_without_drinks", type: "numeric", default: 0 },
          { name: "user_id", type: "uuid" },
          { name: "created_at", type: "timestamp", default: "now()" },
        ],
      })
    );

    await queryRunner.createForeignKey(
      "barbecues",
      new TableForeignKey({
        name: "FK_barbecues_user",
        columnNames: ["user_id"],
        referencedColumnNames: ["id"],
        referencedTableName: "users",
        onDelete: "SET NULL",
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey("barbecues", "FK_barbecues_user");

    await queryRunner.dropTable("barbecues");
  }
}
