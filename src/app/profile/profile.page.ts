import { Component, OnInit } from '@angular/core';
import { SkiService } from '../services/ski.service';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  user;

  constructor(public storage: Storage) {
    this.user = this.storage.getItem("User")
  }
  ngOnInit() {
  }

}
