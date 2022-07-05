import * as fs from 'fs';
/**
 * @param { import("knex").Knex },
 *  knex
 * @returns { Promise<void> },
 * 
 */

export const seed = async (knex) => {
  // Deletes ALL existing entries
  await knex("games").del();
  await knex("games").insert(JSON.parse(fs.readFileSync('../../db/seeds/data/games.json', 'utf-8')));
};
