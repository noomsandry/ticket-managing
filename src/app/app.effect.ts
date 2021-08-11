import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, tap } from "rxjs/operators";

import { MatSnackBar } from "@angular/material/snack-bar";
import * as AppActions from "./app.action";

import { EMPTY } from "rxjs";
import { MatDialog } from "@angular/material/dialog";
import { LoadingComponent } from "./shared/components/loading/loading.component";
@Injectable()
export class AppEffects {
  error$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AppActions.requestError),
        tap(
          () => {
            this._snackBar.open("Server request error", null, {
              panelClass: ["snackbar-error"],
              duration: 3000,
            });
          },
          catchError(() => EMPTY)
        )
      ),
    {
      dispatch: false,
    }
  );

  success$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AppActions.displaySuccessMessage),
        tap(
          ({ message }) => {
            this._snackBar.open(message, null, {
              panelClass: ["snackbar-success"],
              duration: 3000,
            });
          },
          catchError(() => EMPTY)
        )
      ),
    {
      dispatch: false,
    }
  );

  loading$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AppActions.startLoading),
        tap(
          ({ message }) => {
            this.loadingRef = this.dialog.open(LoadingComponent, {
              data: {
                message,
              },
            });
          },
          catchError(() => EMPTY)
        )
      ),
    {
      dispatch: false,
    }
  );

  loaded$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AppActions.stopLoading),
        tap(
          () => {
            if (this.loadingRef) {
              this.loadingRef.close();
            }
          },
          catchError(() => EMPTY)
        )
      ),
    {
      dispatch: false,
    }
  );
  private loadingRef;

  constructor(
    private actions$: Actions,
    private _snackBar: MatSnackBar,
    private dialog: MatDialog
  ) {}
}
