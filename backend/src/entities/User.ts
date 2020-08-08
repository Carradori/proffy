interface IShecdule {
  week_day: number;
  from: string;
  to: string;
}

export interface IUser {
  name: string;
  avatar: string;
  whatsapp: string;
  bio: string;
  subject: string;
  cost: number;
  schedule: IShecdule[];
}
