import { LoadingService } from './loading.service';
import { UserData } from './../../models/main-models';
import { AlertUtilitys } from './../utils/alert-utilitys';
import { USERDATA_KEY } from './../../app.variables';
import { LocalStorageService } from './local-storage.service';
import { Injectable, Inject, PLATFORM_ID } from "@angular/core";
import { Router } from "@angular/router";
//import { JwtHelperService } from '@auth0/angular-jwt';
import { isPlatformBrowser } from "@angular/common";

import { Subject, BehaviorSubject, from } from "rxjs/index";
import { map } from "rxjs/operators";
import { Observable } from "rxjs";

import { Config } from "../../app.config";
import { TOKEN_KEY } from "../../app.variables";


@Injectable({
  providedIn: "root"
})
export class AuthAPIService {

  public isLoginSubject = new BehaviorSubject<boolean>(false);
  public loggedIn: Subject<boolean> = new Subject<boolean>();

  private _isAuth: BehaviorSubject<boolean> = new BehaviorSubject(false);
  readonly _isAuth$: Observable<boolean> = this._isAuth.asObservable();

  private _userData: Subject<any> = new Subject()
  readonly _userData$: Observable<any> = this._userData.asObservable();


  constructor(
    protected localStorage: LocalStorageService,
    protected config: Config,
    protected AlertUtilitys: AlertUtilitys,
    //protected jwtHelper: JwtHelperService,
    @Inject(PLATFORM_ID) protected platformId: Object,
    protected router: Router,
    protected loadingService: LoadingService
  ) { }

  isLoggedIn(): Observable<boolean> {
    return this.isLoginSubject.asObservable();
  }

  setAuth(bool) {
    this._isAuth.next(bool)
  } 

  public isAuthenticated(): Observable<boolean> {
    if (!isPlatformBrowser(this.platformId)) {
      this.isLoginSubject.next(false)
      return new Observable();
    } else {

      return this.localStorage.getItem(TOKEN_KEY).pipe(

        map((data: any) => {
          if (data == null) {
            this.loggedIn.next(false);
            this._isAuth.next(false);
            this.isLoginSubject.next(false);
            return false;
          } else {
           // let localAuth = !this.jwtHelper.isTokenExpired(data.slice(1, -1));
            this.loggedIn.next(true);
            this._isAuth.next(true);
            this.isLoginSubject.next(true);
            return true;
          }
        })
      );
    }
  }

  setToken(_token: any) {
    return from(this.localStorage.setItem(TOKEN_KEY, _token)).toPromise();
  }

  setUser(_userData: UserData) {
    return from(this.localStorage.setItem(USERDATA_KEY, _userData)).toPromise();
  }

  // saveData(responseObject, naveg) {
  //   this.localStorage.setItem(USERDATA_KEY, responseObject.userdata).subscribe(
  //     response => {
  //       this._userData.next(responseObject.userdata);
  //       this.localStorage.setItem(TOKEN_KEY, responseObject.token).subscribe(
  //         response =>{
  //           this.getUser(naveg)
  //         },
  //         err1 => {
  //           console.log('erro no token')
  //         }
  //       )
  //     },
  //     err2 =>{
  //       console.log('erro no usuario')
  //     }
  //   );
  // }
  saveData(responseObject, naveg) {
    this.setToken(responseObject.token)
      .then(() => {
        this.setUser(responseObject.userdata)
          .then(() => {
            this._isAuth.next(true);
            this._userData.next(responseObject.userdata);
            // this.getUser(naveg)
            if (naveg) {
              if (naveg === "reload") {
                location.reload();
              } else {
                this.router.navigate([naveg]);
                this.loadingService.finishLoading();
              }
            }
          })
      })
  }

  // getUser(naveg) {
  //   this.localStorage.getItem(TOKEN_KEY).pipe(
  //     map ((_token: string)=>{
  //       if(_token){
  //         this.loggedIn.next(true);
  //         this._isAuth.next(true);
  //         this.router.navigate([naveg]);
  //       }else{
  //         this.AlertUtilitys.showMsg('error', 'Erro', 'Erro ao efetuar o login, tente novamente', 'Ok');
  //       }
  //     })
  //   ).subscribe();
  // }
  logOut() {
    this.localStorage.removeAll();
    this._isAuth.next(false);
    this.isLoginSubject.next(false);
    location.reload()
    this.router.navigate(['/login'])
  }
}
