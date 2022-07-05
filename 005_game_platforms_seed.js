import * as fs from 'fs';
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const seed = async (knex) => {
  // Deletes ALL existing entries
  await knex("game_platforms").del();
  const platforms = JSON.parse(fs.readFileSync('../../db/seeds/data/gamePlatforms.json', 'utf-8'));
  let size = 500;
  let iteration = 1;
  let slice = [];
  while ((slice = platforms.slice((iteration - 1) * size, (iteration * size) - 1)).length != 0) {
    iteration++;
    await knex("game_platforms").insert(slice)
  }
};
