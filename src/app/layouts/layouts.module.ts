import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { SharedModule } from "@shared/shared.module";
import { PageLayoutComponent } from "./page-layout/page-layout.component";

@NgModule({
  declarations: [PageLayoutComponent],
  imports: [CommonModule, RouterModule, SharedModule],
  exports: [PageLayoutComponent],
})
export class LayoutsModule {}
