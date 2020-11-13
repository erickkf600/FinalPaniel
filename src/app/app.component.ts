import { LoadingService } from './shared/services/loading.service';
import { UserData } from './models/main-models';
import { USERDATA_KEY } from './app.variables';
import { LocalStorageService } from './shared/services/local-storage.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';
import { AuthAPIService } from './shared/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public isAuth: boolean = false;
  public showSide: boolean = false;
  public isLoading: boolean = true;
  public user: UserData;
  public selectedItemFromMenu: string;
  constructor(
    private authService: AuthAPIService, 
    public router: Router,
    protected localStorage: LocalStorageService,
    public loadingService: LoadingService,

  ) { }

  ngOnInit(){

    this.checkAuth()
    this.loadingService.startLoading();
    this.loadingService.isLoading.subscribe(
      response => {
        this.isLoading = response;
      },
      error => {
        console.log(error);
      },
      () => {}
      );
  }

  showMenu(event) {
    console.log(event)
    this.showSide = event;
  }

  checkAuth(){
    this.authService.isAuthenticated().subscribe();
    this.authService.loggedIn.subscribe(
      _isAuth => {
        this.handleAuth(_isAuth);
      })
  }

  selectedItemMenuChanged(event) {
    if (event) {
      this.selectedItemFromMenu = event;
    }
  }

  handleAuth(value) {
    this.isAuth = value;

    if (value) {
      this.localStorage.getItem(USERDATA_KEY).subscribe(
        response => {
          let dataObj = JSON.parse(response);
          this.user = dataObj;
        },
        error => { },
        () => {
          this.loadingService.finishLoading();
        }
      );
    } else {
      this.loadingService.finishLoading();
    }
  }
}
