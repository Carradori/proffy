import Knex from "knex";

export async function up(knex: Knex) {
  return knex.schema.createTable("subjects", (table) => {
    table.increments().primary();
    table.string("title");
  });
}
export async function down(knex: Knex) {
  return knex.schema.dropTable("subjects");
}
