import { Component, Input, OnInit } from "@angular/core";
import { Ticket } from "@shared/interfaces/ticket.interface";

@Component({
  selector: "app-ticket-card",
  templateUrl: "./ticket-card.component.html",
  styleUrls: ["./ticket-card.component.css"],
})
export class TicketCardComponent implements OnInit {
  @Input() ticket: Ticket;
  constructor() {}

  ngOnInit(): void {}
}
