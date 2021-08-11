/* import angular modules*/
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";
import { FlexLayoutModule } from "@angular/flex-layout";

/* import ngrx */
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";

/* import angular material */
import { DragDropModule } from "@angular/cdk/drag-drop";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";

/* local import */
import { TicketRoutingModule } from "./ticket-routing.module";
import { ticketReducer } from "./reducers";
import { TicketEffects } from "./effects/ticket.effect";
import { TicketResolver } from "./ticket.resolver";
import { TicketCardComponent } from "./views/ticket-card/ticket-card.component";
import { TicketColumnComponent } from "./views/ticket-column/ticket-column.component";
import { TicketFormComponent } from "./views/ticket-form/ticket-form.component";
import { ListPageComponent } from "./views/list-page/list-page.component";
import { DetailsPageComponent } from "./views/details-page/details-page.component";
import { CreatePageComponent } from "./views/create-page/create-page.component";
import { UserModule } from "../user/user.module";

@NgModule({
  declarations: [
    TicketCardComponent,
    TicketColumnComponent,
    TicketFormComponent,
    ListPageComponent,
    DetailsPageComponent,
    CreatePageComponent,
  ],
  imports: [
    CommonModule,
    TicketRoutingModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    DragDropModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatSlideToggleModule,
    RouterModule,
    StoreModule.forFeature("ticket", ticketReducer.reducer),
    EffectsModule.forFeature([TicketEffects]),
  ],
  providers: [TicketResolver],
})
export class TicketModule {}
