import { ISubjectsRepository } from "./ISubjectsRepository";
import { Response } from "express";
import { ISubjects } from "./ISubjects";
import { db } from "../../database/connection";

export default class DBSubjectsRepository implements ISubjectsRepository {
  async index(): Promise<ISubjects[]> {
    const subjects = await db("subjects").select("*");
    return subjects;
  }
  async save(): Promise<void> {}
}
