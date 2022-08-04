import { MainCover } from "@portalBasicClasses/covers/mainCover";

export interface ILayoutViewContext {
  getLeftViewContext: () => ILayoutChildViewContext;
  getTopViewContext: () => ILayoutChildViewContext;
  getRightViewContext: () => ILayoutChildViewContext;
  getBottomViewContext: () => ILayoutChildViewContext;
}

export class LayoutViewContext implements ILayoutViewContext {
  constructor(
    private mainCover: MainCover,

    private leftViewContext: (
      mainCover: MainCover
    ) => ILayoutChildViewContext = () =>
      new LayoutChildViewContext(mainCover, () => undefined),

    private topViewContext: (
      mainCover: MainCover
    ) => ILayoutChildViewContext = () =>
      new LayoutChildViewContext(mainCover, () => undefined),

    private rightViewContext: (
      mainCover: MainCover
    ) => ILayoutChildViewContext = () =>
      new LayoutChildViewContext(mainCover, () => undefined),

    private bottomViewContext: (
      mainCover: MainCover
    ) => ILayoutChildViewContext = () =>
      new LayoutChildViewContext(mainCover, () => undefined)
  ) {}

  getLeftViewContext(): ILayoutChildViewContext {
    const result = this.leftViewContext(this.mainCover);
    return result;
  }
  getTopViewContext(): ILayoutChildViewContext {
    const result = this.topViewContext(this.mainCover);
    return result;
  }
  getRightViewContext(): ILayoutChildViewContext {
    const result = this.rightViewContext(this.mainCover);
    return result;
  }
  getBottomViewContext(): ILayoutChildViewContext {
    const result = this.bottomViewContext(this.mainCover);
    return result;
  }
}

export interface ILayoutChildViewContext {
  generateViewContext: () => any;
}

export class LayoutChildViewContext<TContext>
  implements ILayoutChildViewContext
{
  constructor(
    private mainCover: MainCover,
    public viewContext: (mainCover: MainCover) => TContext = () => undefined
  ) {}
  generateViewContext(): TContext {
    const result = this.viewContext(this.mainCover);
    return result;
  }
}
