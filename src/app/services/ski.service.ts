import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Groupe } from './DTO';
import { Storage } from '@ionic/Storage';
import { tap } from 'rxjs/operators';
import { Settings } from './settings';

@Injectable({
  providedIn: 'root'
})
export class SkiService {
  public static levels = [
    "Test",
    "Ourson",
    "Kangourou",
    "Prélude",
    "Tigre",
    "Lion",
    "Christiania",
    "Parallèle I",
    "Parallèle II",
    "Compétence I",
    "Compétence II",
    "Élite I",
    "Élite II",
    "Excellence"
  ];
  public static status = [
    "Normal",
    "En retard",
    "Absent",
    "Fort"
  ];
  public static days = [
    "Erreur",
    "Lundi",
    "Mardi",
    "Mercredi",
    "Jeudi",
    "Vendredi",
    "Samedi",
    "Dimanche"
  ];

  constructor(public http: HttpClient,
    private storage: Storage,
    private authStorage: AuthService) {

  }

  getTest() {
    this.storage.set("UserID", "Test")

    const httpOptions = {
      headers: new HttpHeaders({
        "Token": '114627',
        "test": "placeholder"
      })
    };
    return this.http.get(Settings.apiUrl, httpOptions);

  }

  getLevels() {
    return this.http.get(Settings.apiUrl + "levels");
  }

  getGroups(id: number) {
    const httpOptions = {
      headers: new HttpHeaders({
        "UserToken": this.authStorage.getToken(),
      })
    };

    var tmp = this.http.get<Groupe[]>(Settings.apiUrl + "levels/" + id + "/groups", httpOptions).pipe(
      tap( // Log the result or error
        data => console.log("Yo", data),
        error => console.log("Yo", error)
      )
    );

    return tmp;
  }

  getGroup(groupID: number) {

    const httpOptions = {
      headers: new HttpHeaders({
        "UserToken": this.authStorage.getToken(),
      })
    };
    var tmp = this.http.get<Groupe>(Settings.apiUrl + "group/" + groupID, httpOptions);
    return tmp;
  }

  getExercices(levelID: number) {
    var tmp = this.http.get(
      Settings.apiUrl + "levels/" + levelID + "/exercices"
    );
    return tmp;
  }

  setStatus(student: any) {
    const httpOptions = {
      headers: new HttpHeaders({
        "UserToken": this.authStorage.getToken(),
        "Content-Type": "application/json"
      })
    };

    return this.http.post(Settings.apiUrl + "status/", student, httpOptions)
  }

  search(input) {
    input = input.trim().replace(" ", "_");

    const httpOptions = {
      headers: new HttpHeaders({
        "UserToken": this.authStorage.getToken(),
      })
    };
    var tmp = this.http.get(Settings.apiUrl + "search/" + input, httpOptions);
    return tmp;
  }

}
