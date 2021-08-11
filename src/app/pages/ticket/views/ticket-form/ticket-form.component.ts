import { Component, Input, OnInit, ViewEncapsulation } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Ticket } from "@shared/interfaces/ticket.interface";

@Component({
  selector: "app-ticket-form",
  templateUrl: "./ticket-form.component.html",
  styleUrls: ["./ticket-form.component.css"],
  encapsulation: ViewEncapsulation.None,
})
export class TicketFormComponent implements OnInit {
  @Input() title = "Nouveau Ticket";
  @Input() ticket: Ticket;
  form: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      id: [this.ticket?.id],
      completed: [this.ticket?.completed],
      assigneeId: [this.ticket?.assigneeId],
      description: [this.ticket?.description],
    });
  }

  submit() {}
}
