import { TOKEN_KEY } from './../../app.variables';
import { LocalStorageService } from './../services/local-storage.service';
import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpHeaders, HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { mergeMap } from 'rxjs/operators';


@Injectable()
export class JwtInterceptor implements HttpInterceptor {

    constructor(private localStorage: LocalStorageService) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return this.localStorage.getItem(TOKEN_KEY)
            .pipe(mergeMap((token) => {
                
                if (token) {
                    token = token.slice(1, -1);
                    const headers = new HttpHeaders({
                        'Authorization': `Bearer ${token}`,
                    });
                    request = request.clone({headers});
                } else {
                    request = request.clone();
                }
                       
                return next.handle(request);
            }));
        
    }
}