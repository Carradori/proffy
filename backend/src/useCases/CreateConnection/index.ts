import DBConnectionRepository from "../../repositories/connections/DBConnectionRepository";
import CreateConnectionUseCase from "./CreateConnectionUseCase";
import CreateConnectionController from "./CreateConnectionController";

const mysqlConnectionRepository = new DBConnectionRepository();
const createConnectionUseCase = new CreateConnectionUseCase(
  mysqlConnectionRepository
);
const createConnectionController = new CreateConnectionController(
  createConnectionUseCase
);

export { createConnectionUseCase, createConnectionController };
