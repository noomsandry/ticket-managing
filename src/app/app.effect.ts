import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map } from "rxjs/operators";

import { MatSnackBar } from "@angular/material/snack-bar";
import * as AppActions from "./app.action";

import { EMPTY } from "rxjs";
@Injectable()
export class AppEffects {
  error$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AppActions.requestError),
      map(
        () => {
          this._snackBar.open("Server request error", null, {
            panelClass: ["snackbar-error"],
            duration: 3000,
          });
          return AppActions.displayMessageError();
        },
        catchError(() => EMPTY)
      )
    )
  );

  constructor(private actions$: Actions, private _snackBar: MatSnackBar) {}
}
