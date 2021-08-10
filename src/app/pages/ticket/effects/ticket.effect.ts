import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, mergeMap, withLatestFrom } from "rxjs/operators";

import { BackendService } from "@shared/services/backend.service";
import { TicketActions } from "@pages/ticket/actions";
@Injectable()
export class TicketEffects {
  load$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TicketActions.loadTickets),
      mergeMap(() =>
        this.backendService.tickets().pipe(
          map((items) => {
            return TicketActions.ticketsLoaded({
              tickets: items,
            });
          })
        )
      )
    )
  );

  create$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TicketActions.createTicket),
      mergeMap(({ ticket }) =>
        this.backendService.newTicket(ticket).pipe(
          map((item) => {
            return TicketActions.ticketCreated({
              ticket: item,
            });
          })
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private backendService: BackendService
  ) {}
}
