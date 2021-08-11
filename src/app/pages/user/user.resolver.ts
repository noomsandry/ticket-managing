import { Injectable } from "@angular/core";
import { Resolve } from "@angular/router";
import { Store } from "@ngrx/store";
import { UserActions } from "./actions";

@Injectable()
export class UserResolver implements Resolve<boolean> {
  constructor(private store: Store) {}
  resolve(r): boolean {
    this.store.dispatch(UserActions.loadUsers());
    return true;
  }
}
