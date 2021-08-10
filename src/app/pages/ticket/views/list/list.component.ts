import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";

import { Ticket } from "@shared/interfaces/ticket.interface";
import { User } from "@shared/interfaces/user.interface";
import { BackendService } from "@shared/services/backend.service";
import { Store } from "@ngrx/store";
import { TicketActions } from "@pages/ticket/actions";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.css"],
})
export class ListComponent implements OnInit {
  public readonly users$: Observable<User[]>;
  public readonly tickets$: Observable<Ticket[]>;

  constructor(private store: Store) {}

  ngOnInit(): void {}
}
