import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { LayoutComponent } from "./components/layout/layout.component";

const components = [LayoutComponent];

@NgModule({
  declarations: components,
  imports: [CommonModule],
  providers: [],
  bootstrap: [],
  exports: components,
})
export class CommonComponentsModule {}
