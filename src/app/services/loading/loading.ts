import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class LoadingService {
  private totalAssets: number = 0;  
  private loadedAssets: number = 0;

  private _isLoading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  isLoading$ = this._isLoading.asObservable();

  constructor() {}


  registerAsset() {
    if (this.totalAssets === 0) {
      queueMicrotask(() => {
        this._isLoading.next(true);
      });
    }

    this.totalAssets++;
  }


  assetLoaded() {
    this.loadedAssets++;

    if (this.loadedAssets >= this.totalAssets) {
        queueMicrotask(() => {
        this._isLoading.next(false);
      });
    }
  }


  reset() {
    this.totalAssets = 0;
    this.loadedAssets = 0;
    this._isLoading.next(true);
  }
}
