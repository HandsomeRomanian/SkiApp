import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

/*
  Generated class for the SkiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SkiProvider {


  public static apiUrl = "https://api.mateimartin.ca:8081/"

  constructor(public http: HttpClient) {
    
  }

  getLevels(){
    return this.http.get(SkiProvider.apiUrl +"levels");
  }

  getGroups(id: number){
    return this.http.get(SkiProvider.apiUrl +"groups/"+id);
  }



}
