import { UserData } from './../../models/main-models';

import { Injectable, Inject, PLATFORM_ID } from "@angular/core";
import { isPlatformBrowser } from "@angular/common";

import { StorageMap } from '@ngx-pwa/local-storage';
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class LocalStorageService {
  constructor(
    @Inject(PLATFORM_ID) protected platformId: Object,
    private storage: StorageMap,
  ) { }

  setItem(key: string, value: UserData): Observable<UserData> {
    if (isPlatformBrowser(this.platformId)) {
      return this.storage.set(key, JSON.stringify(value))
    } else {
      return null;
    }
  }

  getItem(key: string): Observable<any> {
    if (isPlatformBrowser(this.platformId)) {
      return this.storage.get(key);
    } else {
      return null;
    }
  }

  removeItem(key: string) {
    if (isPlatformBrowser(this.platformId)) {
      this.storage.delete(key).subscribe(() => { });
    } else {
      return null;
    }
  }

  removeAll() {
    if (isPlatformBrowser(this.platformId)) {
      this.storage.clear().subscribe(() => {});
    } else {
      return null;
    }
  }
}
