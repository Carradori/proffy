import { ISubjectsRepository } from "../../repositories/subjects/ISubjectsRepository";

export default class CreateSubjectsUseCase {
  constructor(private subjectsRepository: ISubjectsRepository) {}

  async index() {
    return await this.subjectsRepository.index();
  }
}
