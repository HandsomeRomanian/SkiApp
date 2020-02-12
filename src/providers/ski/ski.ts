import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

/*
  Generated class for the SkiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SkiProvider {

  public static levels = ["Test", "Ourson", " Kangourou", " Prélude", " Tigre", " Lion", " Christiania", " Parallèle I", " Parallèle II", " Compétence I", " Compétence II", " Élite I", " Élite II", " Excellence"]
  public static status = ["Non évalué", "Normal", "En retard", "Absent", "Fort"];
  public static apiUrl = "https://api.mateimartin.ca:8081/"

  constructor(public http: HttpClient) {
  }

  getLevels() {
    return this.http.get(SkiProvider.apiUrl + "levels")
  }

  getGroups(id: number) {
    var tmp = this.http.get(SkiProvider.apiUrl + "groups/" + id);
    console.log(tmp);
    return tmp;
  }

  getGroup(groupID: number) {
    var tmp = this.http.get(SkiProvider.apiUrl + "group/" + groupID);
    return tmp;
  }

  getExercices(levelID: number) {
    var tmp = this.http.get(SkiProvider.apiUrl + "levels/" + levelID + "/exercices");
    return tmp;
  }

  setStatus(student: any) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.post<any>(SkiProvider.apiUrl + "status/", student, { headers });
    
  }

  

}
