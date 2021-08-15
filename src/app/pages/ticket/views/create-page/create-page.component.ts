import { Component, OnDestroy, OnInit } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { Observable, Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";

import { TicketActions } from "../../actions";

import { User } from "@app/shared/interfaces/user.interface";
import { UserSelectors } from "@app/pages/user/selectors";
@Component({
  selector: "app-create-page",
  templateUrl: "./create-page.component.html",
  styleUrls: ["./create-page.component.css"],
})
export class CreatePageComponent implements OnInit, OnDestroy {
  users$: Observable<User[]>;
  private _unsubscribeAll: Subject<any>;

  constructor(private store: Store) {
    this._unsubscribeAll = new Subject();
  }

  ngOnInit(): void {
    this.users$ = this.store.pipe(
      takeUntil(this._unsubscribeAll),
      select(UserSelectors.selectUsers)
    );
  }

  create({ description, assigneeId }) {
    this.store.dispatch(
      TicketActions.createTicket({
        description,
        assigneeId,
      })
    );
  }

  ngOnDestroy(): void {
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }
}
