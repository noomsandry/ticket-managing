import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";

import { TicketRoutingModule } from "./ticket-routing.module";
import { ListComponent } from "./views/list/list.component";
import { DetailsComponent } from "./views/details/details.component";
import { ticketReducer } from "./reducers";
import { TicketEffects } from "./effects/ticket.effect";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";

@NgModule({
  declarations: [ListComponent, DetailsComponent],
  imports: [
    CommonModule,
    TicketRoutingModule,
    StoreModule.forRoot({ ticket: ticketReducer.reducer }),
    EffectsModule.forRoot([TicketEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: false,
    }),
  ],
})
export class TicketModule {}
