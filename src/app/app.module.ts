import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { EffectsModule } from "@ngrx/effects";

import { MatSnackBarModule } from "@angular/material/snack-bar";

import { LayoutsModule } from "@layouts/layouts.module";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { AppEffects } from "./app.effect";
import { StoreModule } from "@ngrx/store";
import * as AppReducer from "./app.reducer";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutsModule,
    RouterModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    StoreModule.forRoot(AppReducer.reducers, {
      metaReducers: AppReducer.metaReducers,
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: false,
    }),
    EffectsModule.forRoot([AppEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
