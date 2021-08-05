import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  title = 'Login';
  empID: number;

  constructor(
    public storage: Storage,
    private authAPI: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    if (this.authAPI.connected()) {
      this.router.navigate(['/profile']);
    }
  }

  login(form) {
    this.authAPI.login(form.value.numero, form.value.password);
  }
}
