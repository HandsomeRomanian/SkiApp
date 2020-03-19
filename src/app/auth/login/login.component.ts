import { Component, OnInit } from '@angular/core';
import { SkiService } from 'src/app/services/ski.service';
import { Router } from '@angular/router';
import { Storage } from "@ionic/Storage";
import { AuthService } from 'src/app/services/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {

  title = "Login";
  empID: number;
  form: FormGroup;
  errorMSg:string ="";


  constructor(
    private formBuilder: FormBuilder,
    public storage: Storage,
    public toastController: ToastController,
    private authAPI: AuthService,
    private router: Router) {
    this.form = this.formBuilder.group({
      numero: ['', Validators.required]
    });
    console.log(this.form.controls.numero)
  }

  ngOnInit() {
    if (this.authAPI.connected()) {
      this.router.navigate(["/profile"])
    }
  }

  async login() {
    console.log(this.empID)
    console.log(isNaN(this.empID))
    if (isNaN(this.empID)) {
      this.errorMSg = "Numéro invalide"
    }

    this.authAPI.login(this.empID).subscribe(
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
      },
      async error => {
        if (error.error == "InexistentUser" || error.error == "InvalidLogin")
          this.errorMSg = "Numéro invalide"
        else
          console.log(error.error);
          
        
      }
    );
    
  }


}
