import Knex from "knex";

export async function up(knex: Knex) {
  return knex.schema.createTable("connections", (table) => {
    table.increments("id").primary();

    table.timestamp("created_at").defaultTo(knex.raw("current_timestamp")).notNullable();

    table
      .integer("user_id")
      .notNullable()
      .references("id")
      .inTable("users")
      .onUpdate("cascade")
      .onDelete("cascade");
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTableIfExists("connections");
}
