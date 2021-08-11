import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BackendService } from "./services/backend.service";
import { LoadingComponent } from "./components/loading/loading.component";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
@NgModule({
  declarations: [LoadingComponent],
  imports: [CommonModule, MatProgressSpinnerModule],
  providers: [BackendService],
})
export class SharedModule {}
