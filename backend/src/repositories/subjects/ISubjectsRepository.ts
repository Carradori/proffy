import { ISubjects } from "./ISubjects";

export interface ISubjectsRepository {
  save(): Promise<void>;
  index(): Promise<ISubjects[]>;
}
