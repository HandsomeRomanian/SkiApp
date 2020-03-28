import { Component, OnInit } from '@angular/core';
import { NavParams } from '@ionic/angular';
import { SkiService } from 'src/app/services/ski.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { LevelService } from 'src/app/services/level.service';

@Component({
  selector: 'app-exercice-list',
  templateUrl: './exercice-list.component.html',
  styleUrls: ['./exercice-list.component.scss'],
})
export class ExerciceListComponent {
  title = "Exerices";
  levelID: number;
  exercices: Observable<any>;


  constructor(private route: ActivatedRoute, private levelService: LevelService) {
    this.levelID = this.route.snapshot.params.id;
    this.exercices = this.levelService.getExercices(this.levelID);
    this.title = SkiService.levels[this.levelID];
  }  

}
