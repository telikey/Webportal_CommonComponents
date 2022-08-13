import { MainCover } from "@portalBasicClasses/covers/mainCover";

export interface ILoadingViewContext {

}

export class LoadingViewContext implements ILoadingViewContext {
  constructor(private mainCover: MainCover
  ) { }
}
