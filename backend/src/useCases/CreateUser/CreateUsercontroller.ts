import CreateUserUseCase from "./CreateUserUseCase";
import { Request, Response } from "express";

export default class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  async handle(request: Request, response: Response) {
    const { name, bio, whatsapp, cost, subject, schedule } = request.body;

    const newSchedule = JSON.parse(schedule);

    try {
      await this.createUserUseCase.execute({
        avatar: request.file.filename,
        bio,
        cost,
        name,
        subject,
        whatsapp,
        schedule: newSchedule,
      });

      return response.status(201).send();
    } catch (error) {
      return response.status(400).json({
        error: error.message || "Erro inexperado ocorreu na criação do usuário",
      });
    }
  }
  async index(request: Request, response: Response) {
    try {
      const filters = request.query;

      if (!filters.subject || !filters.week_day || !filters.time) {
        return response
          .status(400)
          .json({ error: "Faltando parametros de filtragem" });
      }

      const classes = await this.createUserUseCase.index({
        subject: filters.subject as string,
        time: filters.time as string,
        week_day: filters.week_day as string,
      });

      const serializedClasses = classes.map((classe) => {
        return {
          ...classe,
          image_url: `http://10.0.0.100:3333/uploads/${classe.avatar}`,
        };
      });

      return response.status(200).json(serializedClasses);
    } catch (error) {
      return response.status(400).json({
        error:
          error.message ||
          "Erro inexperado ocorreu durante a listagem de usuários",
      });
    }
  }
}
