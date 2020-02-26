import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { SkiService } from './ski.service';
import { LoginRequest, LoginResponse } from './DTO';
import { Storage } from '@ionic/Storage';
import { ToastController } from '@ionic/angular';
import { promise } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(private http: HttpClient, private storage: Storage, public toastController: ToastController) { }

  public login(code: number) {
    let body = new LoginRequest();
    body.code = code;
    this.http.post<LoginResponse>(SkiService.apiUrl + "login", body).subscribe(async resp => {

      this.storage.set("User", resp.employe);
      this.storage.set("Token", resp.token);
      window.localStorage.setItem("Token",resp.token);
      
      return resp;
    });
  }

  public logout(){
    
  }

  public getToken() {
    return window.localStorage.getItem("Token");
  }


}
