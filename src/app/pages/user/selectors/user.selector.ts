import { createFeatureSelector, createSelector } from "@ngrx/store";
import { UserState, selectAll } from "@app/pages/user/reducers/user.reducer";

export const getRouteState = createFeatureSelector<UserState>("user");

export const selectUsers = createSelector(getRouteState, selectAll);
