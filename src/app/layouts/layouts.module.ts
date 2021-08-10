import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { MatToolbarModule } from "@angular/material/toolbar";

import { SharedModule } from "@shared/shared.module";
import { PageLayoutComponent } from "./page-layout/page-layout.component";

@NgModule({
  declarations: [PageLayoutComponent],
  imports: [CommonModule, RouterModule, SharedModule, MatToolbarModule],
  exports: [PageLayoutComponent],
})
export class LayoutsModule {}
