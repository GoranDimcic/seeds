import * as fs from 'fs';
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const seed = async (knex) => {
  // Deletes ALL existing entries
  await knex("game_categories").del();
  const categories = JSON.parse(fs.readFileSync('../../db/seeds/data/gameCategories.json', 'utf-8'));
  let size = 500;
  let iteration = 1;
  let slice = [];
  while ((slice = categories.slice((iteration - 1) * size, (iteration * size) - 1)).length != 0) {
    iteration++;
    await knex("game_categories").insert(slice)
  }
};
