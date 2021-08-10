import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";

import { Ticket } from "@shared/interfaces/ticket.interface";
import { User } from "@shared/interfaces/user.interface";
import { BackendService } from "@shared/services/backend.service";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.css"],
})
export class ListComponent implements OnInit {
  public readonly users$: Observable<User[]> = this.backendService.users();
  public readonly tickets$: Observable<Ticket[]> =
    this.backendService.tickets();

  constructor(private readonly backendService: BackendService) {}

  ngOnInit(): void {}
}
