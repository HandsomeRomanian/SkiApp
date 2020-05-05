import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { LevelService } from '../services/level.service';
import { ErrorService } from '../services/error.service';

@Component({
  selector: 'app-management',
  templateUrl: './evals.page.html',
  styleUrls: ['./evals.page.scss'],
})
export class EvalsPage implements OnInit {

  title: string = "Évaluations";
  levels;

  constructor(
    private levelService: LevelService,
    private authService: AuthService,
    private errorService: ErrorService
  ) {
    this.levelService.getLevels().subscribe(
      resp => {
        this.levels = resp;
      },
      err => {
        this.errorService.manageError(err);
      }
    );
    this.authService.checkConnected();
  }

  ngOnInit() {
    this.authService.checkConnected();
  }

}
