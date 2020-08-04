import Knex from "knex";

export async function up(knex: Knex) {
  return knex.schema.createTable("class_schedules", (table) => {
    table.increments("id").primary();
    
    table.integer("weekday").notNullable();
    table.integer("from").notNullable();
    table.integer("to").notNullable();

    table
      .integer("class_id")
      .notNullable()
      .references("id")
      .inTable("classes")
      .onUpdate("cascade")
      .onDelete("cascade");
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTableIfExists("class_schedules");
}
