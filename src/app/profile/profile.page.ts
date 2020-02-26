import { Component, OnInit } from '@angular/core';
import { SkiService } from '../services/ski.service';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { Storage } from "@ionic/Storage";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  user;

  constructor(
    private SkiAPI: SkiService,
    public storage: Storage,
    private authAPI: AuthService,
    private router: Router) 
    {
    this.storage.get("User").then( user => this.user = user);
  }
  ngOnInit() {
  }

}
