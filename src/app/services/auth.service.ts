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


  constructor(private http: HttpClient,
    private storage: Storage,
    public toastController: ToastController,
    private router: Router,
    private navCtrl: NavController) { }

  public login(code: number) {
    let body = new LoginRequest(code);
    this.http.post<LoginResponse>(Settings.apiUrl + "login", body).subscribe(
      async resp => {
        this.storage.set("User", resp.employe);
        this.storage.set("Token", resp.token);
        window.localStorage.setItem("Token", resp.token);
        this.router.navigate(["/home"]);
        const toast = await this.toastController.create({
          message: 'Bienvenue ' + resp.employe.name + '!',
          duration: 2000
        });
        toast.present();
        return resp;
      },
      error => {
        console.log(error);
      }
    );
  }

  public logout() {
    window.localStorage.removeItem("Token");
    this.storage.remove("Token");
    this.storage.remove("User");
    this.navCtrl.pop()
    this.router.navigate(["/home"]);
  }

  public async checkConnected() {

    if (this.connected) {
      const toast = await this.toastController.create({
        message: 'Cette section est reservée au utilisateurs connectées.',
        duration: 2000
      });
      toast.present();
      this.logout();
    }
    return true;
  }

  public connected() {
    return this.getToken() != null;
  }

  public getToken() {
    console.log(window.localStorage.getItem("Token"))
    return window.localStorage.getItem("Token");
  }


  public getUser() {
    this.storage.get("User").then(user => { return user; });
  }

}
