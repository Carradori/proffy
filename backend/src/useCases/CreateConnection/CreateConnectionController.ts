import CreateConnectionUseCase from "./CreateConnectionUseCase";
import { Request, Response } from "express";

export default class CreateConnectionController {
  constructor(private createConnectionUseCase: CreateConnectionUseCase) {}

  async handle(request: Request, response: Response) {
    const { user_id } = request.body;
    try {
      await this.createConnectionUseCase.execute(user_id);
      return response.status(200).send();
    } catch (error) {
      return response.status(400).json({
        error:
          error.message ||
          "Erro inexperado ocorreu durante o cadastro da conexão",
      });
    }
  }
  async index(request: Request, response: Response) {
    try {
      const counts = await this.createConnectionUseCase.index();
      return response.status(200).json({ connections: counts });
    } catch (error) {
      return response.status(400).json({
        error: error.message || "Erro inexperado ao listar as conexões",
      });
    }
  }
}
