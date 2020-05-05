import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { NavController, NavParams, LoadingController, ToastController } from '@ionic/angular';
import { LevelService } from 'src/app/services/level.service';
import { ErrorService } from 'src/app/services/error.service';

@Component({
  selector: 'app-level-list',
  templateUrl: './level-list.component.html',
  styleUrls: ['./level-list.component.scss'],
})
export class LevelListComponent implements OnInit {


  levels;
  title: string = "Exercices"
  @Input() action: number;


  constructor(
    private levelService: LevelService,
    private errorService: ErrorService,
    public loadingCtrl: LoadingController,
  ) {
    this.levelService.getLevels().subscribe(
      resp => {
        this.levels = resp;
      },
      err => {
        this.errorService.manageError(err);
      }
    );

  }

  ngOnInit() { }


}
