import { Component, OnInit } from '@angular/core';
import { SkiService } from 'src/app/services/ski.service';
import { Router } from '@angular/router';
import { Storage } from "@ionic/Storage";
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent  {
  
  title = "Login";
  empID: number;


  constructor(
    public storage: Storage,
    private authAPI: AuthService,
    private router: Router) 
  {
    this.storage.get("Token").then(val => {
      console.log(val)
    })
    if (authAPI.connected()) {
      this.router.navigate(['/profile']);
    }
  }

  ngOnInit() { }

  login(form) {
    this.authAPI.login(form.value.numero);
  }


}
