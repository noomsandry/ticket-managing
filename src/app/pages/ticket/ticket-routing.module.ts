import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { CreatePageComponent } from "./views/create-page/create-page.component";
import { DetailsPageComponent } from "./views/details-page/details-page.component";
import { ListPageComponent } from "./views/list-page/list-page.component";

const routes: Routes = [
  {
    path: "",
    component: ListPageComponent,
  },
  {
    path: "create",
    component: CreatePageComponent,
  },
  {
    path: "details/:id",
    component: DetailsPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TicketRoutingModule {}
