import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";

import { LayoutsModule } from "@layouts/layouts.module";
import { AppComponent } from "./app.component";
import { BackendService } from "./shared/services/backend.service";
import { AppRoutingModule } from "./app-routing.module";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, LayoutsModule],
  providers: [BackendService],
  bootstrap: [AppComponent],
})
export class AppModule {}
