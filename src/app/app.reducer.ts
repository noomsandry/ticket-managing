import {
  Action,
  ActionReducerMap,
  createReducer,
  MetaReducer,
} from "@ngrx/store";

/* export interface AppState {}
export const initialAppState: AppState = {};

export function reducer(state: AppState, action: Action) {
  return appReducer(state, action);
}

export const appReducer = createReducer(initialAppState);
 */

export interface AppState {}

export const reducers: ActionReducerMap<AppState> = {};

export const metaReducers: MetaReducer<AppState>[] = [];
