import { createAction, props } from "@ngrx/store";
import { User } from "@shared/interfaces/user.interface";

const source = "User Page";

export const loadUsers = createAction(`[${source}] Load`);

export const UsersLoaded = createAction(
  `[${source}] Loaded`,
  props<{ users: User[] }>()
);
