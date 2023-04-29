import type { User } from "./user";

export interface Article {
  id: number;
  title: string;
  description: string;
  body: string;
  date: Date;
  image: string;
  user: User;
}
