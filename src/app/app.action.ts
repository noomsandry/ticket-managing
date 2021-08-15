import { createAction, props } from "@ngrx/store";

const source = "App Page]";

export const requestError = createAction(
  `[${source}] Request error`,
  props<{ errorMessage: string }>()
);

export const displaySuccessMessage = createAction(
  `[${source}] display success message`,
  props<{ message: string }>()
);

export const startLoading = createAction(
  `[${source}] start loading`,
  props<{ message: string }>()
);

export const stopLoading = createAction(`[${source}] stop loading`);
