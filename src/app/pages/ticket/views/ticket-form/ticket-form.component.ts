import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  ViewEncapsulation,
} from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Observable, Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";

import { select, Store } from "@ngrx/store";

import { UserSelectors } from "@app/pages/user/selectors";
import { User } from "@app/shared/interfaces/user.interface";
import { Ticket } from "@shared/interfaces/ticket.interface";

@Component({
  selector: "app-ticket-form",
  templateUrl: "./ticket-form.component.html",
  styleUrls: ["./ticket-form.component.css"],
  encapsulation: ViewEncapsulation.None,
})
export class TicketFormComponent implements OnInit, OnDestroy {
  @Input() title = "Nouveau Ticket";
  @Input() ticket: Ticket = <Ticket>{
    completed: false,
  };
  @Input() editable = true;
  @Output() onSubmit = new EventEmitter();

  form: FormGroup;
  users$: Observable<User[]>;
  private _unsubscribeAll: Subject<any>;

  constructor(private fb: FormBuilder, private store: Store) {
    this._unsubscribeAll = new Subject();
  }

  ngOnInit(): void {
    this.users$ = this.store.pipe(
      takeUntil(this._unsubscribeAll),
      select(UserSelectors.selectUsers)
    );
    this.form = this.fb.group({
      id: [this.ticket?.id],
      completed: [this.ticket?.completed],
      assigneeId: [this.ticket?.assigneeId],
      description: [this.ticket?.description],
    });
  }

  submit() {
    if (this.form.valid) {
      this.onSubmit.emit(this.form.value);
    }
  }

  ngOnDestroy(): void {
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }
}
