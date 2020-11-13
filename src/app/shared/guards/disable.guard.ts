import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthAPIService } from '../services/auth.service';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class DisableGuard implements CanActivate {
  constructor(
    private router: Router,
    private authService: AuthAPIService
    ) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.authService.isAuthenticated().pipe(
      map(data => {
        if (data) {
          this.router.navigate(['/']);
          return false;
        }
        return true;
      })
    );
  }
  
}
