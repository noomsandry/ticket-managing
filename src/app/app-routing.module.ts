import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PageLayoutComponent } from "@layouts/page-layout/page-layout.component";

const routes: Routes = [
  {
    path: "",
    component: PageLayoutComponent,
    children: [
      {
        path: "",
        loadChildren: () =>
          import("./pages/ticket/ticket.module").then((m) => m.TicketModule),
      },
    ],
  },
  {
    path: "**",
    redirectTo: "",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
