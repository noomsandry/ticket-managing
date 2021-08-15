import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  ViewEncapsulation,
} from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Observable } from "rxjs";

import { User } from "@app/shared/interfaces/user.interface";
import { Ticket } from "@shared/interfaces/ticket.interface";

@Component({
  selector: "app-ticket-form",
  templateUrl: "./ticket-form.component.html",
  styleUrls: ["./ticket-form.component.css"],
  encapsulation: ViewEncapsulation.None,
})
export class TicketFormComponent implements OnInit {
  @Input() title = "Nouveau Ticket";
  @Input() ticket: Ticket = <Ticket>{
    completed: false,
  };
  @Input() users: User[] = [];
  @Output() onSubmit = new EventEmitter();
  form: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      id: [this.ticket?.id],
      completed: [this.ticket?.completed],
      assigneeId: [this.ticket?.assigneeId],
      description: [this.ticket?.description, [Validators.required]],
    });
  }

  submit() {
    if (this.form.valid) {
      this.onSubmit.emit(this.form.value);
    }
  }
}
