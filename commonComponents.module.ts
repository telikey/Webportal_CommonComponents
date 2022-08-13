import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { LayoutComponent } from "./components/layout/layout.component";
import { LoadingComponent } from "./components/loading/loading.component";
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

const components = [LayoutComponent, LoadingComponent];

@NgModule({
  declarations: components,
  imports: [CommonModule, MatProgressSpinnerModule],
  providers: [],
  bootstrap: [],
  exports: components,
})
export class CommonComponentsModule { }
