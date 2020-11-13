import { Router } from '@angular/router';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Location } from '@angular/common';
import { AuthAPIService } from 'src/app/shared/services/auth.service';
import { Config } from '../../../../app.config';


@Component({
  selector: 'view-sidemenu',
  templateUrl: './view-sidemenu.component.html'
})
export class ViewSidemenuComponent implements OnInit {
  @Input() showSide: boolean
  @Input() isAuth: boolean
  @Output() toggleSideMenu = new EventEmitter()
  @Output() selectedItemMenuChanged = new EventEmitter(true)

  public param: string;
  public selectedItem: string;

  public pages: Array<{ title: string; icon: string; url: string }> = [
    {
      title: "Home",
      icon: "fas fa-home",
      url: "home"
    },
    {
      title: "Adicionar Compra",
      icon: "far fa-credit-card",
      url: "adicionar-compra"
    },
    {
      title: "Adicionar Usuário",
      icon: "fa fa-user",
      url: "adicionar-user"
    },
    {
      title: "Sair",
      icon: "fa fa-sign-out-alt",
      url: "logout"
    }
  ]
  constructor(
    private location: Location,
    public router: Router,
    protected authService: AuthAPIService,
    public config: Config) { }

  ngOnInit() {
    this.param = this.location.path()
    this.checkParams(this.isAuth)
    this.sendPageToHeader();
  }

  checkParams(bool) {
    if(bool){
      switch (this.param) {
        case "/login":
          this.selectedItem = "";
          break;
        case "/home":
          this.selectedItem = "home";
          break;
        case "/noticias":
          this.selectedItem = "noticias";
          break;
  
        default:
          break;
      }
    }
  }
  hideSide() {
    this.showSide = !this.showSide;
    console.log('eventr')
    this.toggleSideMenu.emit(this.showSide);
  }
  openPage(page) {
    if(this.isAuth){
      switch (page.url) {
        case "logout":
          this.logout();
          break;
  
        default:
          this.router.navigate([page.url]);
          this.selectedItem = page.url;
          break;
      }
      this.sendPageToHeader();
    }

  }
  sendPageToHeader() {
    for (let i = 0; i < this.pages.length; i++) {
      if (this.pages[i].url == this.selectedItem) {
        this.selectedItemMenuChanged.emit(this.pages[i].title);
      }
    }
  }
  logout() {
    // swal.fire({
    //   title: "Tem certeza que deseja fazer logout?",
    //   type: "warning",
    //   //
    //   showCancelButton: true,
    //   buttonsStyling: false,
    //   animation: false,
    //   customClass: "app-swal animated zoomIn faster",
    //   confirmButtonClass: "primary-button",
    //   cancelButtonClass: "secundary-button",
    //   //
    //   confirmButtonText: "Sim",
    //   cancelButtonText: "Cancelar"
    // }).then(result => {
    //   if (result.value) {
    //this.authService.logout();
    //   }
    // });
    this.authService.logOut();
  }

}
