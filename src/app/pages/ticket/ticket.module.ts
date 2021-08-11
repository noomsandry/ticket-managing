import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { DragDropModule } from "@angular/cdk/drag-drop";
import { MatSnackBarModule } from "@angular/material/snack-bar";

import { TicketRoutingModule } from "./ticket-routing.module";
import { ListComponent } from "./views/list/list.component";
import { DetailsComponent } from "./views/details/details.component";
import { ticketReducer } from "./reducers";
import { TicketEffects } from "./effects/ticket.effect";
import { TicketResolver } from "./ticket.resolver";
import { TicketCardComponent } from "./views/ticket-card/ticket-card.component";
import { TicketColumnComponent } from "./views/ticket-column/ticket-column.component";
import { TicketUiEffects } from "./effects/ticket-ui.effect";

@NgModule({
  declarations: [
    ListComponent,
    DetailsComponent,
    TicketCardComponent,
    TicketColumnComponent,
  ],
  imports: [
    CommonModule,
    DragDropModule,
    TicketRoutingModule,
    MatSnackBarModule,
    StoreModule.forRoot({ ticket: ticketReducer.reducer }),
    EffectsModule.forRoot([TicketEffects, TicketUiEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: false,
    }),
  ],
  providers: [TicketResolver],
})
export class TicketModule {}
