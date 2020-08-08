import Knex from "knex";

export async function seed(knex: Knex) {
  await knex("subjects").insert([
    { title: "Artes" },
    { title: "Biologia" },
    { title: "Ciências" },
    { title: "Educação Física" },
    { title: "Física" },
    { title: "Filosofia / Sociologia" },
    { title: "Geografia" },
    { title: "História" },
    { title: "Matemática" },
    { title: "Português" },
    { title: "Química" },
  ]);
}
