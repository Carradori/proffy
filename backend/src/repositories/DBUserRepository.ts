import { IUsersRepository } from "./IUserRepository";
import { IFilters } from "./IUserFiltered";
import { IUser } from "../entities/User";
import { db } from "../database/connection";
import { convertHourToMinute } from "../utils/convertHourToMinute";
import { IUserResponseFiltered } from "./IUserResponseFiltered";
import { IUserList } from "./subjects/IUserList";

export class DBUserRepository implements IUsersRepository {
  async save(user: IUser): Promise<void> {
    const { avatar, bio, cost, name, subject, whatsapp, schedule } = user;

    const trx = await db.transaction();

    try {
      const usersIdCreated = await trx("users").insert({
        name,
        avatar,
        whatsapp,
        bio,
      });

      const user_id = usersIdCreated[0];

      const classesIdCreated = await trx("classes").insert({
        subject,
        cost,
        user_id,
      });

      const class_id = classesIdCreated[0];

      const classSchedule = schedule.map((scheduleItem) => {
        return {
          week_day: scheduleItem.week_day,
          from: convertHourToMinute(scheduleItem.from as string),
          to: convertHourToMinute(scheduleItem.to as string),
          class_id,
        };
      });

      await trx("class_schedule").insert(classSchedule);

      await trx.commit();
    } catch (error) {
      console.log(error);
      await trx.rollback();
      throw new Error("Ocorreu um erro");
    }
  }
  async index(filters: IFilters): Promise<IUserResponseFiltered[]> {
    const timeInMinutes = convertHourToMinute(filters.time);

    const classes = await db("classes")
      .whereExists(function () {
        this.select("class_schedule.*")
          .from("class_schedule")
          .whereRaw("`class_schedule`.`class_id` = `classes`.`id`")
          .whereRaw("`class_schedule`.`week_day` = ??", [
            Number(filters.week_day),
          ])
          .whereRaw("`class_schedule`.`from` <= ??", [timeInMinutes])
          .whereRaw("`class_schedule`.`to` > ??", [timeInMinutes]);
      })
      .where("classes.subject", "=", filters.subject)
      .join("users", "classes.user_id", "=", "users.id")
      .select(["classes.*", "users.*"]);

    return classes;
  }
  async list(id: number): Promise<IUserList[]> {
    const user = await db("users")
      .where({
        id,
      })
      .select("*");
    return user;
  }
}
