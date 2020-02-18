import { Component, OnInit } from '@angular/core';
import { NavParams } from '@ionic/angular';
import { SkiService } from 'src/app/SkiAPI/ski.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-exercice-list',
  templateUrl: './exercice-list.component.html',
  styleUrls: ['./exercice-list.component.scss'],
})
export class ExerciceListComponent {
  title = "Exerices";
  levelID: number;
  exercices: Observable<any>;


  constructor(private route: ActivatedRoute, private skiService: SkiService) {
    this.levelID = this.route.snapshot.params.id;
    this.exercices = this.skiService.getExercices(this.levelID);
    this.title = SkiService.levels[this.levelID];
  }

  openPage(id) {
    alert(id);
  }

  

}
