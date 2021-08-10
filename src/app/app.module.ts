import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BackendService } from "./shared/services/backend.service";
import { LayoutsModule } from "@layouts/layouts.module";
import { AppRoutingModule } from "./app-routing.module";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, LayoutsModule],
  providers: [BackendService],
  bootstrap: [AppComponent],
})
export class AppModule {}
