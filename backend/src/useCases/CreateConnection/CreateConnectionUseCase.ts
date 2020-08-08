import { IUsersRepository } from "../../repositories/IUserRepository";
import { IConnectionRepository } from "../../repositories/connections/IConnectionRepository";

export default class CreateConnectionUseCase {
  constructor(private connectionRepository: IConnectionRepository) {}

  async execute(user_id: number) {
    await this.connectionRepository.save(user_id);
  }
  async index() {
    return await this.connectionRepository.index();
  }
}
