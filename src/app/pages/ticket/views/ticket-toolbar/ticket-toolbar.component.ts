import { Component, OnDestroy, OnInit } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { select, Store } from "@ngrx/store";

import { User } from "@app/shared/interfaces/user.interface";
import { UserSelectors } from "@app/pages/user/selectors";
import { FormBuilder, FormGroup } from "@angular/forms";
import { TicketActions } from "../../actions";

@Component({
  selector: "app-ticket-toolbar",
  templateUrl: "./ticket-toolbar.component.html",
  styleUrls: ["./ticket-toolbar.component.css"],
})
export class TicketToolbarComponent implements OnInit, OnDestroy {
  public users$: Observable<User[]>;
  public form: FormGroup;
  private _unsubscribeAll: Subject<any>;

  constructor(private store: Store, private fb: FormBuilder) {
    this._unsubscribeAll = new Subject();
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      assigneeId: [],
    });

    this.users$ = this.store.pipe(
      takeUntil(this._unsubscribeAll),
      select(UserSelectors.selectUsers)
    );

    this.form.valueChanges.subscribe((value) => {
      const filter = {};
      /**
       * remove undefined filter key
       */
      Object.keys(value).forEach((key) => {
        if (value[key]) {
          filter[key] = value[key];
        }
      });
      this.store.dispatch(TicketActions.setTicketFilter({ filter }));
    });
  }

  reset() {
    this.form.reset();
  }

  ngOnDestroy(): void {
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }
}
