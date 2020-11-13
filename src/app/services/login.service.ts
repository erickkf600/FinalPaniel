import { UserSignin } from './../models/main-models';
import { Config } from "./../app.config";
import { Injectable, Inject, PLATFORM_ID } from "@angular/core";
import { isPlatformBrowser } from "@angular/common";
import { Subject } from "rxjs/index";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, of } from "rxjs";

//import { JwtHelperService } from "@auth0/angular-jwt";
import { LocalStorageService } from "../shared/services/local-storage.service";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  public isAuth: Subject<boolean> = new Subject<boolean>();

  constructor(
    protected localStorage: LocalStorageService,
    @Inject(PLATFORM_ID) protected platformId: Object,
   // protected jwtHelper: JwtHelperService,
    public config: Config,
    public httpClient: HttpClient
  ) { }

  public postLogin(data): Observable<any> {

    return this.httpClient.post<any>(this.config.baseUrl + "auth", data);

  }

}
