import { IUsersRepository } from "../../repositories/IUserRepository";
import { IFilters } from "../../repositories/IUserFiltered";
import { IUser } from "../../entities/User";

export default class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  async execute(data: IUser) {
    const user = data;
    await this.usersRepository.save(user);
  }
  async index(filters: IFilters) {
    return await this.usersRepository.index(filters);
  }
}
