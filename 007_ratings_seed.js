import * as fs from 'fs';
/**
 * @param { import("knex").Knex },
 *  knex
 * @returns { Promise<void> },
 */
export const seed = async (knex) => {
  // Deletes ALL existing entries
  const ratings = JSON.parse(fs.readFileSync('../../db/seeds/data/ratings.json', 'utf-8'));
  await knex("ratings").del();
  let size = 500;
  let iteration = 1;
  let slice = [];
  while ((slice = ratings.slice((iteration - 1) * size, (iteration * size) - 1)).length != 0) {
    iteration++;
    await knex("ratings").insert(slice)
  }
  //;
}
  ;
