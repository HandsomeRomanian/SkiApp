import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';
import { Group } from 'src/app/services/DTO';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  constructor(
    public http: HttpClient,
    private storage: Storage,
    private authStorage: AuthService) { }

  getGroups(id: number): Observable<Group[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Authorization": "Bearer " + this.authStorage.getToken(),
      }),
      params: new HttpParams().append('levelId', id.toString())
    };

    var tmp = this.http.get<Group[]>(environment.apiUrl + "groups", httpOptions).pipe(
      tap( // Log the result or error
        data => console.log("Yo", data),
        error => console.log("Yo", error)
      )
    );

    return tmp;
  }

  getGroup(groupID: number): Observable<Group> {

    const httpOptions = {
      headers: new HttpHeaders({
        "Authorization": "Bearer " + this.authStorage.getToken(),
      })
    };
    var tmp = this.http.get<Group>(environment.apiUrl + "groups/" + groupID, httpOptions);
    return tmp;
  }
}
