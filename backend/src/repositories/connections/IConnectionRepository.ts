export interface IConnectionRepository {
  save(user_id: number): Promise<void>;
  index(): Promise<number>;
}
