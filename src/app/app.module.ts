import { FdModule } from './shared/module/fd.module';
import { LoadingService } from './shared/services/loading.service';
import { AlertUtilitys } from './shared/utils/alert-utilitys';
import { SweetAlert2Module } from '@toverux/ngx-sweetalert2';
import { JwtInterceptor } from './shared/utils/jwt.interceptor';
import { LocalStorageService } from './shared/services/local-storage.service';
import { Config } from './app.config';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StorageModule } from '@ngx-pwa/local-storage';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ViewSidemenuComponent } from './shared/components/header-wrapper/view-sidemenu/view-sidemenu.component';
import { ViewToolbarComponent } from './shared/components/header-wrapper/view-toolbar/view-toolbar.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewSidemenuComponent,
    ViewToolbarComponent
  ],
  imports: [
    BrowserModule,
    FdModule,
    AppRoutingModule,
    HttpClientModule,
    StorageModule.forRoot({ IDBNoWrap: true }),
    BrowserAnimationsModule,
    SweetAlert2Module.forRoot({
      showCancelButton: true,
      buttonsStyling: false,
      animation: false,
      customClass: "app-swal animated zoomIn faster",
      confirmButtonClass: "primary-button",
      cancelButtonClass: "secondary-button",
      cancelButtonText: "Cancelar",
    }),
  ],
  providers: [
    Config,
    LocalStorageService,
    AlertUtilitys,
    LoadingService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
