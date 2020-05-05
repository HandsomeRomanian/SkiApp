import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { LoginRequest, LoginResponse, Employe } from './DTO';
import { Storage } from '@ionic/Storage';
import { ToastController, NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Settings } from './settings';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(
    private http: HttpClient,
    private storage: Storage,
    public toastController: ToastController,
    private router: Router,
    private navCtrl: NavController
  ) { }

  public login(code: number) {
    let body = new LoginRequest(code);
    return this.http.post<LoginResponse>(Settings.apiUrl + "login", body);
  }

  public logout() {
    window.localStorage.removeItem("Token");
    this.storage.remove("Token");
    this.storage.remove("User");
  }

  public async checkConnected() {

    if (!this.connected()) {
      const toast = await this.toastController.create({
        message: 'Cette section est reservée au utilisateurs connectées.',
        duration: 2000
      });
      toast.present();
      this.logout();
      this.navCtrl.pop();
      this.router.navigate(["/auth/login"]);
    }
    return true;
  }

  public connected() {
    return this.getToken() != null;
  }

  public getToken() {
    return window.localStorage.getItem("Token");
  }

  public getUser() {
    this.storage.get("User").then(user => { return user; });
  }

}
