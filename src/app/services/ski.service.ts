import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Group, Level, Student } from './DTO';
import { Storage } from '@ionic/storage';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

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
    "Absent",
    "En retard",
    "Normal",
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

  public static shortType = ['MB', 'E', 'H'];

  public static longType = ["Habilité", "Exercice", "Maneuvre de Base"];

  constructor(public http: HttpClient,
    private storage: Storage,
    private authStorage: AuthService) {

  }

  getLevels() {
    return this.http.get<Level[]>(environment.apiUrl + "levels");
  }

  

  getLevelInfo(levelID: number): Observable<Level> {
    return this.http.get<Level>(environment.apiUrl + "levels/" + levelID);
  }

  setStatus(student: Student) {
    const httpOptions = {
      headers: new HttpHeaders({
        "Authorization": "Bearer " + this.authStorage.getToken(),
        "Content-Type": "application/json"
      })
    };

    return this.http.put(environment.apiUrl + "status/" + student.studentId, { status: student.status }, httpOptions)
  }

  search(input): Observable<Group[] | Student[]> {
    input = input.trim().replace(" ", "_");

    const httpOptions = {
      headers: new HttpHeaders({
        "Authorization": "Bearer " + this.authStorage.getToken(),
      })
    };
    var tmp = this.http.get<Group[] | Student[]>(environment.apiUrl + "search/" + input, httpOptions);
    return tmp;
  }

}
