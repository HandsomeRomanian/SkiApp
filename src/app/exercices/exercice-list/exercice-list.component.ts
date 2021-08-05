import { Component, OnInit } from '@angular/core';
import { SkiService } from 'src/app/shared/services/ski.service';
import { ActivatedRoute } from '@angular/router';
import { Level } from 'src/app/shared/services/DTO';

@Component({
  selector: 'app-exercice-list',
  templateUrl: './exercice-list.component.html',
  styleUrls: ['./exercice-list.component.scss'],
})
export class ExerciceListComponent {
  title = 'Exerices';
  levelID: number;
  level: Level = new Level();

  constructor(private route: ActivatedRoute, private skiService: SkiService) {
    this.levelID = this.route.snapshot.params.id;
    this.skiService.getLevelInfo(this.levelID).subscribe((resp) => {
      this.level = resp;
    });
    this.title = SkiService.levels[this.levelID];
  }

  shortType(type) {
    return SkiService.shortType[type];
  }

  openPage(id) {
    alert(id);
  }
}
