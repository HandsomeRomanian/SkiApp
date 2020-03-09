import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SkiService } from '../services/ski.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-management',
  templateUrl: './evals.page.html',
  styleUrls: ['./evals.page.scss'],
})
export class EvalsPage implements OnInit {

  title: string = "Évaluations";
  levels: Observable<any>;

  constructor(private skiService: SkiService,
              private authService: AuthService) {
    this.levels = skiService.getLevels();
    this.authService.checkConnected();
   }

  ngOnInit() {
    this.authService.checkConnected();
  }

}
