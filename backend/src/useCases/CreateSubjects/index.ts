import DBSubjectsRepository from "../../repositories/subjects/DBSubjectsRepository";
import CreateSubjectsUseCase from "./CreateSubjectsUseCase";
import CreateSubjectsController from "./CreateSubjectsController";

const mysqlConnectionSubjects = new DBSubjectsRepository();
const createSubjectsUseCase = new CreateSubjectsUseCase(
  mysqlConnectionSubjects
);
const createSubjectsController = new CreateSubjectsController(
  createSubjectsUseCase
);
export { createSubjectsUseCase, createSubjectsController };
