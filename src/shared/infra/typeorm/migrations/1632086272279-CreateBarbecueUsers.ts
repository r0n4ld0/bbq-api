import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from "typeorm";

export class CreateBarbecueUsers1632086272279 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "barbecue_users",
        columns: [
          { name: "id", type: "uuid", isPrimary: true },
          { name: "user_id", type: "uuid" },
          { name: "barbecue_id", type: "uuid" },
          { name: "value", type: "numeric", default: 0 },
          { name: "is_paid", type: "boolean", default: false },
          { name: "created_at", type: "timestamp", default: "now()" },
        ],
      })
    );

    await queryRunner.createForeignKey(
      "barbecue_users",
      new TableForeignKey({
        name: "FK_barbecue_users",
        columnNames: ["user_id"],
        referencedColumnNames: ["id"],
        referencedTableName: "users",
        onDelete: "SET NULL",
      })
    );

    await queryRunner.createForeignKey(
      "barbecue_users",
      new TableForeignKey({
        name: "FK_barbecue_users_barbecues",
        columnNames: ["barbecue_id"],
        referencedColumnNames: ["id"],
        referencedTableName: "barbecues",
        onDelete: "SET NULL",
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey("barbecue_users", "FK_barbecue_users");
    await queryRunner.dropForeignKey(
      "barbecue_users",
      "FK_barbecue_users_barbecues"
    );

    await queryRunner.dropTable("barbecue_users");
  }
}
