import { IUser } from "../entities/User";
import { IFilters } from "./IUserFiltered";
import { IUserResponseFiltered } from "./IUserResponseFiltered";
import { IUserList } from "./subjects/IUserList";

export interface IUsersRepository {
  save(user: IUser): Promise<void>;
  index(filters: IFilters): Promise<IUserResponseFiltered[]>;
  list(id: number): Promise<IUserList[]>;
}
