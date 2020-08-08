import { DBUserRepository } from "../../repositories/DBUserRepository";
import CreateUserUseCase from "./CreateUserUseCase";
import CreateUserController from "./CreateUsercontroller";

const mysqlUserRepository = new DBUserRepository();
const createUserUseCase = new CreateUserUseCase(mysqlUserRepository);
const createUserController = new CreateUserController(createUserUseCase);

export { createUserUseCase, createUserController };
