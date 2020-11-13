import { Injectable } from '@angular/core';

import { Subject } from "rxjs/index";

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  public isLoading: Subject<boolean> = new Subject<boolean>();
  public isLoadingInternal: Subject<boolean> = new Subject<boolean>();

  constructor() { }

  public startLoading() {
    this.isLoading.next(true);
  }

  public finishLoading() {
    this.isLoading.next(false);
  }
  
  public startInternalLoading() {
    this.isLoadingInternal.next(true);
  }

  public finishInternalLoading() {
    this.isLoadingInternal.next(false);
  }

}
