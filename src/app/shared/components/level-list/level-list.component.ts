import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { NavController, LoadingController } from '@ionic/angular';
import { Level } from '../../services/DTO';
import { SkiService } from '../../services/ski.service';

@Component({
  selector: 'app-level-list',
  templateUrl: './level-list.component.html',
  styleUrls: ['./level-list.component.scss'],
})
export class LevelListComponent implements OnInit {
  levels: Observable<Level[]>;
  title: string = 'Exercices';
  @Input() action: number;
  @Output() levelSelectEvent = new EventEmitter<Level>();

  constructor(
    public skiService: SkiService,
    public loadingCtrl: LoadingController,
    private nav: NavController
  ) {
    // If we navigated to this page, we will have an item available as a nav param
    this.levels = skiService.getLevels();
  }

  ngOnInit() {}

  public selectLevel(level: Level) {
    this.levelSelectEvent.emit(level);
  }
}
