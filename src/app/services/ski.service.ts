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
    this.storage.get("UserID").then(val => console.log(val))
    return this.http.get(Settings.apiUrl, httpOptions);

  }

  getLevels() {
    const httpOptions = {
      headers: new HttpHeaders({
      })
    };
    return this.http.get(Settings.apiUrl + "levels", httpOptions);
  }

  getGroups(id: number) {
    const httpOptions = {
      headers: new HttpHeaders({
        "UserToken": this.authStorage.getToken(),
      })
    };
<<<<<<< HEAD
    console.log(this.authStorage.getToken())


    var tmp = this.http.get<Groupe[]>(Settings.apiUrl + "groups/" + id, httpOptions).pipe(
=======

    var tmp = this.http.get<Groupe[]>(Settings.apiUrl + "levels/" + id + "/groups", httpOptions).pipe(
>>>>>>> Ionic-Capacitor
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
<<<<<<< HEAD
        "Content-Type": "application/json"
=======
        "Content-Type": "application/json",
>>>>>>> Ionic-Capacitor
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
