import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { SkiService } from './ski.service';
import { LoginRequest, LoginResponse } from './DTO';
import { Storage } from '@ionic/Storage';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 

  constructor(private http: HttpClient, private storage: Storage,public toastController: ToastController) { }

  public login(code:number ) {
    console.trace("login")
    let body = new LoginRequest();
    body.code = code;
    this.http.post<LoginResponse>(SkiService.apiUrl+"login",body).subscribe(async resp =>{
      this.storage.set("User",resp.employe);
      this.storage.set("Token",resp.token);
      const toast = await this.toastController.create({
        header: 'Toast header',
        message: 'Click to Close',
        position: 'top'
      });
      toast.present();
      return resp;
    });
  }


}
