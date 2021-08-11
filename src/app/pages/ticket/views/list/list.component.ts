import { Component, OnDestroy, OnInit } from "@angular/core";
import { Observable, Subject } from "rxjs";

import { Ticket } from "@shared/interfaces/ticket.interface";
import { User } from "@shared/interfaces/user.interface";
import { select, Store } from "@ngrx/store";
import { TicketSelectors } from "@pages/ticket/selectors";
import { takeUntil } from "rxjs/operators";
import { TicketActions } from "@pages/ticket/actions";
import { tick } from "@angular/core/testing";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.css"],
})
export class ListComponent implements OnInit, OnDestroy {
  public users$: Observable<User[]>;
  public complated$: Observable<Ticket[]>;
  public uncomplated$: Observable<Ticket[]>;
  public readonly todo = "TO-DO";
  public readonly done = "DONE";
  private _unsubscribeAll: Subject<any>;

  constructor(private store: Store) {
    this._unsubscribeAll = new Subject();
  }

  ngOnInit(): void {
    this.complated$ = this.store.pipe(
      takeUntil(this._unsubscribeAll),
      select(TicketSelectors.selectCompletedTickets)
    );
    this.uncomplated$ = this.store.pipe(
      takeUntil(this._unsubscribeAll),
      select(TicketSelectors.selectUnCompletedTickets)
    );
  }

  onTicketDrop({ ticket, column }) {
    this.store.dispatch(
      TicketActions.completeTicket({
        ticketId: ticket.id,
        completed: column === this.done,
      })
    );
  }

  ngOnDestroy(): void {
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }
}
