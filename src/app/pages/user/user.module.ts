import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";

import { UserEffects } from "./effects/user.effect";
import { userReducer } from "./reducers";
import { UserResolver } from "./user.resolver";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature("user", userReducer.reducer),
    EffectsModule.forFeature([UserEffects]),
  ],
  providers: [UserResolver],
})
export class UserModule {}
