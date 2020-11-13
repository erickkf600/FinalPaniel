import { Injectable } from "@angular/core";

@Injectable()
export class Config {

  // STAGING
  //public baseUrl = "https://api.stg.nrnoficial.com.br/";

  // LOCAL
  public baseUrl = "https://sgep-ws.herokuapp.com/";

  // Misc
  public version: string = "0.1.1";
}