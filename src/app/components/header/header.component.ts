import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { NavController } from '@ionic/angular';
import { AnimationOptions } from '@ionic/angular/providers/nav-controller';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  @Input() title: string;

  constructor(private router: Router,
              private authService: AuthService,
              private navCtrl: NavController) { }

  ngOnInit() {}

  profileClick() {
    if (this.authService.connected()){
      this.router.navigate(['/profile']);
    }
    else{
      this.router.navigate(['/auth/login']);

    }
  }

  back(){
    let animations:AnimationOptions={
      animated: true,
      animationDirection: "back"
    }
    this.navCtrl.back(animations)
  }

}
