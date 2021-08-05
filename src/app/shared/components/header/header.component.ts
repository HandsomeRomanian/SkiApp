import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { AnimationOptions } from '@ionic/angular/providers/nav-controller';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() title: string;

  constructor(
    private router: Router,
    private authService: AuthService,
    private navCtrl: NavController
  ) {}

  ngOnInit() {}

  public profileClick() {
    if (this.authService.connected()) {
      this.router.navigate(['/profile']);
    } else {
      this.router.navigate(['/auth/login']);
    }
  }

  public back() {
    let animations: AnimationOptions = {
      animated: true,
      animationDirection: 'back',
    };
    this.navCtrl.back(animations);
  }
}
