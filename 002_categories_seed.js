import * as fs from 'fs';
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const seed = async (knex) => {
  // Deletes ALL existing entries
  await knex("categories").del();
  await knex("categories").insert(JSON.parse(fs.readFileSync('../../db/seeds/data/categories.json', 'utf-8')));
};
