import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  TemplateRef,
} from "@angular/core";
import { ComponentWithViewContextBase } from "@basicClasses/contexts/componentWithViewContextBase";
import { ILayoutViewContext } from "./layout.context";

type Context = ILayoutViewContext;

@Component({
  selector: "layout",
  templateUrl: "./layout.component.html",
  styleUrls: ["./layout.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutComponent extends ComponentWithViewContextBase<Context> {
  @ContentChild("left") left: TemplateRef<any>;
  @ContentChild("top") top: TemplateRef<any>;
  @ContentChild("right") right: TemplateRef<any>;
  @ContentChild("bottom") bottom: TemplateRef<any>;

  get leftViewContext(): any {
    return this._lazy(
      (x) => x.leftViewContext,
      () => {
        return this.viewContext.getLeftViewContext().generateViewContext();
      }
    );
  }

  get topViewContext(): any {
    return this._lazy(
      (x) => x.topViewContext,
      () => {
        return this.viewContext.getTopViewContext().generateViewContext();
      }
    );
  }

  get rightViewContext(): any {
    return this._lazy(
      (x) => x.rightViewContext,
      () => {
        return this.viewContext.getRightViewContext().generateViewContext();
      }
    );
  }

  get bottomViewContext(): any {
    return this._lazy(
      (x) => x.bottomViewContext,
      () => {
        return this.viewContext.getBottomViewContext().generateViewContext();
      }
    );
  }

  constructor() {
    super();
  }
}
