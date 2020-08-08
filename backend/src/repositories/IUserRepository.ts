import { IUser } from "../entities/User";
import { IFilters } from "./IUserFiltered";
import { IUserResponseFiltered } from "./IUserResponseFiltered";

export interface IUsersRepository {
  save(user: IUser): Promise<void>;
  index(filters: IFilters): Promise<IUserResponseFiltered[]>;
}
