import { Injectable } from "@angular/core";
import { Resolve } from "@angular/router";
import { Store } from "@ngrx/store";
import { TicketActions } from "./actions";

@Injectable()
export class TicketResolver implements Resolve<boolean> {
  constructor(private store: Store) {}
  resolve(r): boolean {
    this.store.dispatch(TicketActions.loadTickets());
    return true;
  }
}
