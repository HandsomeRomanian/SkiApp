import { Component, OnInit } from '@angular/core';
import { NavParams } from '@ionic/angular';
import { SkiService } from 'src/app/services/ski.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Level } from 'src/app/services/DTO';

@Component({
  selector: 'app-exercice-list',
  templateUrl: './exercice-list.component.html',
  styleUrls: ['./exercice-list.component.scss'],
})
export class ExerciceListComponent {
  title = "Exerices";
  levelID: number;
  level: Level = new Level();


  constructor(private route: ActivatedRoute, private skiService: SkiService) {
    this.levelID = this.route.snapshot.params.id;
    this.skiService.getLevelInfo(this.levelID).subscribe(
      resp => {
        this.level = resp;
        resp.exercices.map(x => {
          console.log(x.type)
          console.log(SkiService.shortType[x.type])
        }
        );


      }
    );
    this.title = SkiService.levels[this.levelID];
  }



  shortType(type) {
    return SkiService.shortType[type];
  }

  openPage(id) {
    alert(id);
  }



}
