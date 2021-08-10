import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";

import { Ticket } from "@shared/interfaces/ticket.interface";
import { User } from "@shared/interfaces/user.interface";
import { Store } from "@ngrx/store";
import { TicketSelectors } from "@pages/ticket/selectors";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.css"],
})
export class ListComponent implements OnInit {
  public users$: Observable<User[]>;
  public tickets$: Observable<Ticket[]>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.tickets$ = this.store.select(TicketSelectors.selectTickets);
  }
}
