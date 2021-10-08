import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, finalize, map, mergeMap, switchMap } from "rxjs/operators";
import { of } from "rxjs";

import { BackendService } from "@app/services/backend.service";
import { TicketActions } from "@pages/ticket/actions";
import * as AppActions from "@app/app.action";
import { Store } from "@ngrx/store";
import { Router } from "@angular/router";

@Injectable()
export class TicketEffects {
  load$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TicketActions.loadTickets),
      mergeMap(() => {
        return this.backendService.tickets().pipe(
          map((items) => {
            if (items) {
              this.store.dispatch(AppActions.stopLoading());
              return TicketActions.ticketsLoaded({
                tickets: items,
              });
            }
          }),
          catchError((errorMessage) => {
            this.store.dispatch(AppActions.stopLoading());
            return of(AppActions.requestError({ errorMessage }));
          })
        );
      })
    )
  );

  create$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TicketActions.createTicket),
      mergeMap(({ description, assigneeId }) => {
        this.store.dispatch(
          AppActions.startLoading({ message: "Enregistrement en cours ..." })
        );
        return this.backendService.newTicket({ description, assigneeId }).pipe(
          map((item) => {
            this.store.dispatch(
              AppActions.displaySuccessMessage({ message: "Ticket crée" })
            );
            this.router.navigate(["/"]);
            return TicketActions.ticketCreated({
              ticket: item,
            });
          }),
          catchError((errorMessage) => {
            console.log(errorMessage);
            return of(AppActions.requestError({ errorMessage }));
          }),
          finalize(() => this.store.dispatch(AppActions.stopLoading()))
        );
      })
    )
  );

  update$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TicketActions.updateTicket),
      mergeMap(({ ticket }) => {
        this.store.dispatch(
          AppActions.startLoading({ message: "Mise à jour en cours ..." })
        );
        return this.backendService.update(ticket).pipe(
          map((item) => {
            this.store.dispatch(
              AppActions.displaySuccessMessage({ message: "Ticket à jour" })
            );
            this.router.navigate(["/"]);
            return TicketActions.ticketUpdated({
              ticket: item,
            });
          }),
          catchError((errorMessage) => {
            console.log(errorMessage);
            return of(AppActions.requestError({ errorMessage }));
          }),
          finalize(() => this.store.dispatch(AppActions.stopLoading()))
        );
      })
    )
  );

  delete$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TicketActions.deleteTicket),
      mergeMap(({ id }) =>
        this.backendService.delete(id).pipe(
          map((item) => {
            return TicketActions.ticketDeleted({
              id,
            });
          }),
          catchError((errorMessage) => {
            return of(AppActions.requestError({ errorMessage }));
          }),
          finalize(() => this.store.dispatch(AppActions.stopLoading()))
        )
      )
    )
  );

  complet$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TicketActions.dropTicket),
      mergeMap(({ ticketId, completed, order }) =>
        this.backendService.complete(ticketId, completed, order).pipe(
          map((item) => {
            return TicketActions.ticketDroped({
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
    private readonly backendService: BackendService,
    private router: Router
  ) {}
}
