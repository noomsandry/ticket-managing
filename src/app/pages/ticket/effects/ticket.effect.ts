import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, finalize, map, mergeMap, switchMap } from "rxjs/operators";
import { of } from "rxjs";

import { BackendService } from "@shared/services/backend.service";
import { TicketActions } from "@pages/ticket/actions";
import * as AppActions from "@app/app.action";
import { Store } from "@ngrx/store";

@Injectable()
export class TicketEffects {
  load$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TicketActions.loadTickets),
      mergeMap(() => {
        return this.backendService.tickets().pipe(
          map((items) => {
            return TicketActions.ticketsLoaded({
              tickets: items,
            });
          }),
          catchError((errorMessage) => {
            return of(AppActions.requestError({ errorMessage }));
          }),
          finalize(() => {
            this.store.dispatch(AppActions.stopLoading());
          })
        );
      })
    )
  );

  create$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TicketActions.createTicket),
      mergeMap(({ description }) =>
        this.backendService.newTicket({ description }).pipe(
          map((item) => {
            this.store.dispatch(
              AppActions.displaySuccessMessage({ message: "Ticket crée" })
            );
            return TicketActions.ticketCreated({
              ticket: item,
            });
          }),
          catchError((errorMessage) => {
            console.log(errorMessage);
            return of(AppActions.requestError({ errorMessage }));
          }),
          finalize(() => this.store.dispatch(AppActions.stopLoading()))
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
            return of(AppActions.requestError({ errorMessage }));
          })
        )
      )
    )
  );
  constructor(
    private store: Store,
    private actions$: Actions,
    private readonly backendService: BackendService
  ) {}
}
