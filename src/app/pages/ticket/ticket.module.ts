/* import angular modules*/
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";

/* import ngrx */
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";

/* local import */
import { SharedModule } from "@app/shared/shared.module";

import { TicketRoutingModule } from "./ticket-routing.module";
import { ticketReducer } from "./reducers";
import { TicketEffects } from "./effects/ticket.effect";
import { TicketCardComponent } from "./views/ticket-card/ticket-card.component";
import { TicketColumnComponent } from "./views/ticket-column/ticket-column.component";
import { TicketFormComponent } from "./views/ticket-form/ticket-form.component";
import { ListPageComponent } from "./views/list-page/list-page.component";
import { DetailsPageComponent } from "./views/details-page/details-page.component";
import { CreatePageComponent } from "./views/create-page/create-page.component";
import { TicketToolbarComponent } from "./views/ticket-toolbar/ticket-toolbar.component";

@NgModule({
  declarations: [
    TicketCardComponent,
    TicketColumnComponent,
    TicketFormComponent,
    ListPageComponent,
    DetailsPageComponent,
    CreatePageComponent,
    TicketToolbarComponent,
  ],
  imports: [
    CommonModule,
    TicketRoutingModule,
    ReactiveFormsModule,
    RouterModule,
    SharedModule,
    StoreModule.forFeature("ticket", ticketReducer.reducer),
    EffectsModule.forFeature([TicketEffects]),
  ],
  providers: [],
})
export class TicketModule {}
