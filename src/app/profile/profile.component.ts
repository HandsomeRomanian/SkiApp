import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';

import { SkiService } from '../shared/services/ski.service';
import { Employe } from '../shared/services/DTO';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  public user = new Employe();

  constructor(private SkiAPI: SkiService, public storage: Storage) {
    this.storage.get('User').then((user) => {
      this.user = user;
      console.log(user);
    });
  }

  ngOnInit() {}
}
