import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { TicketActions } from "../../actions";
import * as AppActions from "@app/app.action";
@Component({
  selector: "app-create-page",
  templateUrl: "./create-page.component.html",
  styleUrls: ["./create-page.component.css"],
})
export class CreatePageComponent implements OnInit {
  constructor(private store: Store) {}

  ngOnInit(): void {}

  create({ description }) {
    this.store.dispatch(
      TicketActions.createTicket({
        description,
      })
    );
    this.store.dispatch(
      AppActions.startLoading({ message: "Enregistrement en cours" })
    );
  }
}
