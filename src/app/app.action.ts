import { createAction, props } from "@ngrx/store";

const source = "[App Page]";

export const requestError = createAction(
  `[${source}] Request error`,
  props<{ errorMessage: string }>()
);

export const displayMessageError = createAction(
  `[${source}] display message error`
);
