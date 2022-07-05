import * as fs from 'fs';
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const seed = async (knex) => {
  // Deletes ALL existing entries
  //await knex("users").del();
  await knex("users").insert(JSON.parse(fs.readFileSync('../../db/seeds/data/users.json', 'utf-8')));
};
