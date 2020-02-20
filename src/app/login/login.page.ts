import { Component, OnInit } from "@angular/core";
import { SkiService } from '../services/ski.service';
import { Storage } from "@ionic/Storage";
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"]
})
export class LoginPage implements OnInit {
  title = "Login";
  empID: number;

  constructor(
    private SkiAPI: SkiService,
    public storage: Storage,
    private authAPI: AuthService,
    private router: Router
  ) {
    this.storage.get("Token").then(val =>{
      console.log(val)
    })
  }

  ngOnInit() {}

  login(form){
    this.authAPI.login(form.value.numero);
  }
}
