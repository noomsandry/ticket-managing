import { Injectable } from "@angular/core";
import { Resolve } from "@angular/router";
import { Store } from "@ngrx/store";
import { TicketActions } from "./actions";
import * as AppActions from "@app/app.action";
@Injectable()
export class TicketResolver implements Resolve<boolean> {
  constructor(private store: Store) {}
  resolve(r): boolean {
    this.store.dispatch(
      AppActions.startLoading({ message: "Chargement de la page ..." })
    );
    this.store.dispatch(TicketActions.loadTickets());
    return true;
  }
}
