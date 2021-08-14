import { ChangeDetectorRef, Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Observable, Subject } from "rxjs";
import { takeUntil, tap, filter } from "rxjs/operators";

import { select, Store } from "@ngrx/store";

import { Ticket } from "@app/shared/interfaces/ticket.interface";
import { TicketSelectors } from "../../selectors";
import { TicketActions } from "../../actions";

@Component({
  selector: "app-details-page",
  templateUrl: "./details-page.component.html",
  styleUrls: ["./details-page.component.css"],
})
export class DetailsPageComponent implements OnInit, OnDestroy {
  ticket$: Observable<Ticket>;
  title;
  private _unsubscribeAll: Subject<any>;

  constructor(
    private route: ActivatedRoute,
    private store: Store,
    private cRef: ChangeDetectorRef
  ) {
    this._unsubscribeAll = new Subject();
  }

  ngOnInit(): void {
    const params = this.route.snapshot.params;
    if (params && params.id) {
      this.ticket$ = this.store.pipe(
        takeUntil(this._unsubscribeAll),
        select(TicketSelectors.selectById(Number(params.id))),
        filter((ticket) => ticket !== undefined),
        tap((ticket) => {
          this.title = `Modifier le ticket #${ticket.id}`;
          this.cRef.detectChanges();
        })
      );
    }
  }

  update(ticket) {
    this.store.dispatch(
      TicketActions.updateTicket({
        ticket,
      })
    );
  }

  ngOnDestroy(): void {
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }
}
