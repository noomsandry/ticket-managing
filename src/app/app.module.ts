import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { LayoutsModule } from "@layouts/layouts.module";
import { AppComponent } from "./app.component";
import { BackendService } from "./shared/services/backend.service";
import { AppRoutingModule } from "./app-routing.module";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, LayoutsModule, RouterModule],
  providers: [BackendService],
  bootstrap: [AppComponent],
})
export class AppModule {}
