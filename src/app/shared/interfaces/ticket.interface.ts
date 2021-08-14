import { User } from "./user.interface";

export interface Ticket {
  id: number;
  completed: boolean;
  assigneeId: number;
  description: string;
  assigneed?: User;
}
