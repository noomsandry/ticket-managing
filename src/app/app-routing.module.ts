import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PageLayoutComponent } from "@layouts/page-layout/page-layout.component";
import { TicketResolver } from "@pages/ticket/ticket.resolver";
import { UserResolver } from "@pages/user/user.resolver";

const routes: Routes = [
  {
    path: "",
    component: PageLayoutComponent,
    resolve: {
      ticket: TicketResolver,
      user: UserResolver,
    },
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
