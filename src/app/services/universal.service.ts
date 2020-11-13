import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Config } from "../app.config";

@Injectable({
  providedIn: 'root'
})
export class UniversalService {

  constructor(public httpClient: HttpClient, public config: Config) { }

  //GET
  public getData(param): Observable<any> {
    return this.httpClient.get<any>(this.config.baseUrl +  `admin/${param}`);
  }
//   //POST
//   public addDestaque(dataDest): Observable<Response> {
//     let headers = new HttpHeaders({
//       'Content-Type': 'application/json'
//     });
//     return this.httpClient.post<Response>(this.config.baseUrl + "admin/destaques", dataDest, {headers});
//   }
//   //PUT
//   public editDesatques(newDtDest, id): Observable<Response> {
//     return this.httpClient.put<Response>(this.config.baseUrl + `admin/destaques/${id}`, newDtDest);
//   }
//   //DELETE
//   public delDestaque(id): Observable<Response> {
//     return this.httpClient.delete<Response>(this.config.baseUrl + `admin/destaques/${id}`)
//   }



//   //UPLOAD IMAGEM DESKTOP
//   uploadDesktop(desktop, id, type): Observable<WePhotoResponse>{
//     let url = this.config.baseUrl + `admin/upload/destaques/${id}/${type}`;
//     console.log(url);
//     return this.httpClient.post<WePhotoResponse>(url, desktop);
//   }
//   //UPLOAD IMAGEM MOBILE
//   uploadMobile(mobilePhoto, id, type): Observable<WePhotoResponse>{
//     let url = this.config.baseUrl + `admin/upload/destaques/${id}/${type}`;
//     console.log(url);
//     return this.httpClient.post<WePhotoResponse>(url, mobilePhoto);
//   }


}
