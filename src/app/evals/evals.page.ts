import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { LevelService } from '../services/level.service';

@Component({
  selector: 'app-management',
  templateUrl: './evals.page.html',
  styleUrls: ['./evals.page.scss'],
})
export class EvalsPage implements OnInit {

  title: string = "Évaluations";
  levels: Observable<any>;

  constructor(private levelService: LevelService,
              private authService: AuthService) {
    this.levels = this.levelService.getLevels();
    this.authService.checkConnected();
   }

  ngOnInit() {
    this.authService.checkConnected();
  }

}
