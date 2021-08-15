import { Component, OnDestroy, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { Observable, Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";

import { Ticket } from "@shared/interfaces/ticket.interface";
import { User } from "@shared/interfaces/user.interface";
import { select, Store } from "@ngrx/store";

import { TicketSelectors } from "@pages/ticket/selectors";
import { TicketActions } from "@pages/ticket/actions";
import * as AppActions from "@app/app.action";
import { UserSelectors } from "@app/pages/user/selectors";
@Component({
  selector: "app-list-page",
  templateUrl: "./list-page.component.html",
  styleUrls: ["./list-page.component.css"],
})
export class ListPageComponent implements OnInit, OnDestroy {
  public complated$: Observable<Ticket[]>;
  public uncomplated$: Observable<Ticket[]>;
  public users$: Observable<User[]>;
  public readonly todo = "TO-DO";
  public readonly done = "DONE";

  private _unsubscribeAll: Subject<any>;

  constructor(private store: Store, private router: Router) {
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
    this.users$ = this.store.pipe(
      takeUntil(this._unsubscribeAll),
      select(UserSelectors.selectUsers)
    );
  }

  onDropTicket({ ticket, column, currentIndex }) {
    this.store.dispatch(
      TicketActions.completeTicket({
        ticketId: ticket.id,
        completed: column === this.done,
        order: currentIndex,
      })
    );
  }

  onClickTicket(id) {
    this.router.navigate(["/details", id]);
  }

  onDeleteTicket(id) {
    this.store.dispatch(TicketActions.deleteTicket({ id }));
    this.store.dispatch(
      AppActions.startLoading({ message: "Suppression en cours ..." })
    );
  }

  onSetFilter(filter) {
    this.store.dispatch(TicketActions.setTicketFilter({ filter }));
  }

  ngOnDestroy(): void {
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }
}
