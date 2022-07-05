/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const seed = async (knex) => {
  // Deletes ALL existing entries
  await knex("platforms").del();
  await knex("platforms").insert([
    { id: 1, name: "Windows" },
    { id: 2, name: "X Box" },
    { id: 3, name: "Playstation 4" },
  ]);
};
