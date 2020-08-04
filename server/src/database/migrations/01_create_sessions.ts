import Knex from 'knex';

export async function up(knex: Knex) {
  return knex.schema.createTable('sessions', (table) => {
    table.increments('id').primary();
    table.string('area').notNullable();
    table.decimal('price').notNullable();
    table.integer('user_id').notNullable().references('id').inTable('users').onUpdate('CASCADE').onDelete('CASCADE');
  });
}
export async function down(knex: Knex) {
  return knex.schema.dropTable('sessions');
}
