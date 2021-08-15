import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Observable, Subject } from "rxjs";

import { User } from "@app/shared/interfaces/user.interface";

@Component({
  selector: "app-ticket-toolbar",
  templateUrl: "./ticket-toolbar.component.html",
  styleUrls: ["./ticket-toolbar.component.css"],
})
export class TicketToolbarComponent implements OnInit, OnDestroy {
  @Input("users") users$: Observable<User[]>;
  @Output() onSetFilter = new EventEmitter();
  public form: FormGroup;
  private _unsubscribeAll: Subject<any>;

  constructor(private fb: FormBuilder) {
    this._unsubscribeAll = new Subject();
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      assigneeId: [],
    });

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
      this.onSetFilter.emit(filter);
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
