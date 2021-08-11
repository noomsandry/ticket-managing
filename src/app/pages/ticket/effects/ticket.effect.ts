import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap, withLatestFrom } from "rxjs/operators";

import { BackendService } from "@shared/services/backend.service";
import { TicketActions } from "@pages/ticket/actions";
import { of } from "rxjs";
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

  update$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TicketActions.completeTicket),
      mergeMap(({ ticketId, completed }) =>
        this.backendService.complete(ticketId, completed).pipe(
          map((item) => {
            item.completed = completed;
            return TicketActions.ticketComplated({
              ticket: item,
            });
          }),
          catchError((errorMessage) => {
            return of(TicketActions.requestError({ errorMessage }));
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
