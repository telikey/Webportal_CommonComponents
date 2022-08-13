import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  TemplateRef,
} from "@angular/core";
import { ComponentWithViewContextBase } from "@basicClasses/contexts/componentWithViewContextBase";
import { ILoadingViewContext } from "./loading.context";

type Context = ILoadingViewContext;

@Component({
  selector: "loading",
  templateUrl: "./loading.component.html",
  styleUrls: ["./loading.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoadingComponent extends ComponentWithViewContextBase<Context> {
  constructor() {
    super();
  }
}
