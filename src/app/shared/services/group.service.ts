import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Group } from 'src/app/shared/services/DTO';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  constructor(
    public http: HttpClient,
    private authService: AuthService) { }

  public getGroupsByLevel(id: number): Observable<Group[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Authorization": "Bearer " + this.authService.getToken(),
      }),
      params: new HttpParams().append('levelId', id.toString())
    };

    return this.http.get<Group[]>(environment.apiUrl + "groups", httpOptions);
  }

  public getGroup(groupID: number): Observable<Group> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Authorization": "Bearer " + this.authService.getToken(),
      })
    };
    var tmp = this.http.get<Group>(environment.apiUrl + "groups/" + groupID, httpOptions);
    return tmp;
  }
}
