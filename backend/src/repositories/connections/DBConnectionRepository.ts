import { IConnectionRepository } from "./IConnectionRepository";
import { db } from "../../database/connection";

export default class DBConnectionRepository implements IConnectionRepository {
  async save(user_id: number): Promise<void> {
    try {
      await db("connections").insert({
        user_id,
      });
    } catch (error) {
      throw new Error("Ocorreu um erro");
    }
  }
  async index(): Promise<number> {
    const totalConnectoins = await db("connections").count("* as total");
    const { total } = totalConnectoins[0];
    return total as number;
  }
}
