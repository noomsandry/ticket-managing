import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map } from "rxjs/operators";

import { MatSnackBar } from "@angular/material/snack-bar";
import { TicketActions } from "@pages/ticket/actions";
import { EMPTY } from "rxjs";
@Injectable()
export class TicketUiEffects {
  error$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TicketActions.requestError),
      map(
        () => {
          this._snackBar.open("Server request error", null, {
            panelClass: ["snackbar-error"],
            duration: 3000,
          });
          return TicketActions.displayMessageError();
        },
        catchError(() => EMPTY)
      )
    )
  );

  constructor(private actions$: Actions, private _snackBar: MatSnackBar) {}
}
