import CreateSubjectsUseCase from "./CreateSubjectsUseCase";
import { Request, Response } from "express";

export default class CreateSubjectsController {
  constructor(private subjectsUseCase: CreateSubjectsUseCase) {}

  async index(request: Request, response: Response) {
    try {
      const subjects = await this.subjectsUseCase.index();
      return response.status(200).json(subjects);
    } catch (error) {
      return response.status(400).json({
        error: error.message || "Erro inexperado ao listar as matérias",
      });
    }
  }
}
