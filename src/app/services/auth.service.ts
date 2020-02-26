import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { SkiService } from './ski.service';
import { LoginRequest, LoginResponse } from './DTO';
import { Storage } from '@ionic/Storage';
import { ToastController } from '@ionic/angular';
import { promise } from 'protractor';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(private http: HttpClient, private storage: Storage, public toastController: ToastController) { }

  public login(code: number) {
    let body = new LoginRequest();
    body.code = code;
    // this.http.post<LoginResponse>(SkiService.apiUrl + "login", body).subscribe(async resp => {
      
    //   this.storage.set("User", resp.employe);
    //   this.storage.set("Token", resp.token);
    //   window.localStorage.setItem("Token",resp.token);
      
    //   return resp;
    // });
    this.http.post(SkiService.apiUrl + "login", body).pipe(catchError(this.handleError));
  }

  public logout(){
    
  }



  public connected():boolean{    
    return this.getToken() != null;
  }

  public getToken() {
    return window.localStorage.getItem("Token");
  }


  public getUser() {
    this.storage.get("User")
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }


}
