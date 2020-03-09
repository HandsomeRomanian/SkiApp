import { Component, OnInit } from '@angular/core';
import { SkiService } from 'src/app/services/ski.service';
import { Router } from '@angular/router';
import { Storage } from "@ionic/Storage";
import { AuthService } from 'src/app/services/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

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

  login(form) {
    if (isNaN(form.value.numero)) {

    }

    this.authAPI.login(form.value.numero);
  }


}
