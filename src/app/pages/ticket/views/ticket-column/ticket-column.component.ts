import { moveItemInArray, transferArrayItem } from "@angular/cdk/drag-drop";
import { Component, Input, OnInit, Output, EventEmitter } from "@angular/core";
import { Ticket } from "@shared/interfaces/ticket.interface";

@Component({
  selector: "app-ticket-column",
  templateUrl: "./ticket-column.component.html",
  styleUrls: ["./ticket-column.component.css"],
})
export class TicketColumnComponent implements OnInit {
  @Input() title = "";
  @Input() tickets: Ticket[] = [];
  @Output() onDropTicket = new EventEmitter();
  @Output() onCreateTicket = new EventEmitter();
  @Output() onClickTicket = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  drop(event) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data.tickets,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data.tickets,
        event.container.data.tickets,
        event.previousIndex,
        event.currentIndex
      );
    }
    this.onDropTicket.emit({
      ticket: event.container.data.tickets[event.currentIndex],
      column: event.container.data.title,
    });
  }

  create() {
    this.onCreateTicket.emit(this.title);
  }

  click(id) {
    this.onClickTicket.emit(id);
  }
}
