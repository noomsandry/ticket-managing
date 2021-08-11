import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";
import { Action, createReducer, on } from "@ngrx/store";
import { UserActions } from "@pages/user/actions";
import { User } from "@app/shared/interfaces/user.interface";

export const adapter: EntityAdapter<User> = createEntityAdapter<User>({
  selectId: (entry) => entry.id,
});

export interface UserState extends EntityState<User> {}

export function reducer(state: UserState | undefined, action: Action) {
  return userReducer(state, action);
}

export const initialTicketState: UserState = adapter.getInitialState({});

export const userReducer = createReducer(
  initialTicketState,
  on(UserActions.UsersLoaded, (state, { users }) =>
    adapter.setAll(users, { ...state })
  )
);

export const { selectAll, selectEntities, selectIds, selectTotal } =
  adapter.getSelectors();
