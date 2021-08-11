import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, mergeMap } from "rxjs/operators";

import { BackendService } from "@shared/services/backend.service";
import { UserActions } from "@pages/user/actions";
@Injectable()
export class TicketEffects {
  load$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.loadUsers),
      mergeMap(() =>
        this.backendService.users().pipe(
          map((items) => {
            return UserActions.UsersLoaded({
              users: items,
            });
          })
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private readonly backendService: BackendService
  ) {}
}
