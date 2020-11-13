import { map } from 'rxjs/operators';
import { LoadingService } from './../../../shared/services/loading.service';
import { AlertUtilitys } from './../../../shared/utils/alert-utilitys';
import { AuthService } from './../../../services/login.service';
import { UserSignin } from './../../../models/main-models';
import { StLoginPresenter } from './st-login-presenter';
import { SubSink } from 'subsink';
import { Component, OnInit } from '@angular/core';
import { AuthAPIService } from 'src/app/shared/services/auth.service';
import { LocalStorage } from '@ngx-pwa/local-storage';
import { Router } from '@angular/router';
import { noop } from 'rxjs';

@Component({
  selector: 'app-login-container',
  templateUrl: './login-container.component.html',
})
export class LoginContainerComponent implements OnInit {
  protected subsink = new SubSink();
  protected loginDta: Array<UserSignin>;
  constructor(
    protected stLoginPresenter: StLoginPresenter,
    protected loginService: AuthService,
    protected authService: AuthAPIService,
    protected localStorage: LocalStorage,
    public AlertUtilitys: AlertUtilitys,
    public loadingService: LoadingService,
    protected router: Router
  ) { }

  ngOnInit() {
    this.serviceSubscriptions()
  }


  /**
   * Se inscreve aos Serviços
   */
  serviceSubscriptions() {
    this.subsink.add(
      
    )
  }

  signinUp(val) {
    if (val) {
      this.loadingService.startLoading();
      // this.loginService.postLogin(val).pipe(
      //   map(response => {
      //     console.log(response)
      //     this.router.navigate(['/login']);
      //     localStorage.setItem("user", JSON.stringify(response));
      //   })
      // ).subscribe(noop, err => console.log(err))
      this.loginService.postLogin(val).subscribe(
        response => {
          if (response) {
            localStorage.setItem("user", JSON.stringify(response));
            // this.authService.saveData(response, '/');
          } else {
            this.AlertUtilitys.showMsg('error', 'Erro', 'Ocorreu um erro', 'Ok');
            this.loadingService.finishLoading();
            this.router.navigate(['/login']);
          }
        },
        err => {
          this.AlertUtilitys.showMsg('error', 'Erro', 'Usuário não encontrado!', 'Ok');
          console.log(err)
          this.loadingService.finishLoading();
        },
        () => {
          // this.loadingService.finishLoading();
        }
      )
    }
  }
}
