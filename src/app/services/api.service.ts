import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Settings } from './settings';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public http: HttpClient,
    private authStorage: AuthService) { }

  /**
   * Get resquest to the server. 
   * @param path path of the request
   * @param params body params of the request
   */
  public get(path, params):Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        "UserToken": this.authStorage.getToken(),
        "Content-Type": "application/json"
      }),
      params: params
    };
    return this.http.get(Settings.apiUrl + path, httpOptions);
  }

  /**
   * Put resquest to the server. 
   * @param path path of the request
   * @param params body params of the request
   */
  public put(path, params):Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        "UserToken": this.authStorage.getToken(),
        "Content-Type": "application/json"
      }),
      params: params
    };
    return this.http.put(Settings.apiUrl + path, httpOptions);
  }

  /**
   * Post resquest to the server. 
   * @param path path of the request
   * @param params body params of the request
   */
  public post(path, params):Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        "UserToken": this.authStorage.getToken(),
        "Content-Type": "application/json"
      })
    };
    return this.http.post(Settings.apiUrl + path,params, httpOptions);
  }

  /**
   * Delete resquest to the server. 
   * @param path path of the request
   * @param params body params of the request
   */
  public delete(path, params):Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        "UserToken": this.authStorage.getToken(),
        "Content-Type": "application/json"
      }),
      params: params
    };
    return this.http.delete(Settings.apiUrl + path, httpOptions);
  }
}
