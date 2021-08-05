import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Level } from '../shared/services/DTO';
import { SkiService } from '../shared/services/ski.service';

@Component({
  selector: 'app-exercices',
  templateUrl: './exercices.page.html',
  styleUrls: ['./exercices.page.scss'],
})
export class ExercicesPage implements OnInit {
  title: string = 'Exercices';

  constructor(public skiService: SkiService, private _router: Router) {}

  ngOnInit() {
    console.log('ExercicesPage');
  }

  public selectLevel(event: Level) {
    console.log(event);
    this._router.navigate([`levels/${event.levelId}`]);
  }
}
