import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Groupe } from './DTO';
import { Storage } from '@ionic/Storage';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SkiService {
  public static levels = [
    "Test",
    "Ourson",
    " Kangourou",
    " Prélude",
    " Tigre",
    " Lion",
    " Christiania",
    " Parallèle I",
    " Parallèle II",
    " Compétence I",
    " Compétence II",
    " Élite I",
    " Élite II",
    " Excellence"
  ];
  public static status = [
    "Non évalué",
    "Normal",
    "En retard",
    "Absent",
    "Fort"
  ];

  private static tokenName = "UserToken";
  public static apiUrl = "http://localhost:8100/api/";

  constructor(public http: HttpClient, private storage: Storage, private authStorage: AuthService) {

  }

  getTest() {
    this.storage.set("UserID", "Test")

    const httpOptions = {
      headers: new HttpHeaders({
        "Token": '114627',
        "test": "placeholder"
      })
    };
    this.storage.get("UserID").then(val => console.log(val))
    return this.http.get(SkiService.apiUrl, httpOptions);

  }

  getLevels() {
    const httpOptions = {
      headers: new HttpHeaders({
        UserToken: '114627'
      })
    };
    return this.http.get(SkiService.apiUrl + "levels", httpOptions);
  }

  getGroups(id: number) {
    console.log("yo")
    const httpOptions = {
      headers: new HttpHeaders({
        "UserToken": this.authStorage.getToken(),
      })
    };
    console.log(this.authStorage.getToken())
    

    var tmp = this.http.get<Groupe[]>(SkiService.apiUrl + "groups/" + id, httpOptions).pipe(
      tap( // Log the result or error
        data => console.log("Yo", data),
        error => console.log("Yo", error)
      )
    );
    
    return tmp;
  }

  getGroup(groupID: number) {
    var tmp = this.http.get<Groupe>(SkiService.apiUrl + "group/" + groupID);
    return tmp;
  }

  getExercices(levelID: number) {
    var tmp = this.http.get(
      SkiService.apiUrl + "levels/" + levelID + "/exercices"
    );
    return tmp;
  }

  setStatus(student: any) {
    const headers = new HttpHeaders({
      "Content-Type": "application/json"
    });

    return this.http.post<any>(SkiService.apiUrl + "status/", student, {
      headers
    });
  }

  search(input) {
    input = input.trim().replace(" ", "_");

    const headers = new HttpHeaders({
      "Content-Type": "application/json"
    });
    var tmp = this.http.get(SkiService.apiUrl + "search/" + input);
    return tmp;
  }
}
