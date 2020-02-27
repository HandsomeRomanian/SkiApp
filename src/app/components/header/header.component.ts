import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  @Input() title: string;

  constructor(private router: Router,
              private authService: AuthService
              ) { }

  ngOnInit() {}

  profileClick() {
    if (this.authService.connected()){
      this.router.navigate(['/profile']);
    }
    else{
      this.router.navigate(['/auth/login']);

    }
  }

}
