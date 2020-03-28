import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { NavController, NavParams, LoadingController } from '@ionic/angular';
import { LevelService } from 'src/app/services/level.service';

@Component({
  selector: 'app-level-list',
  templateUrl: './level-list.component.html',
  styleUrls: ['./level-list.component.scss'],
})
export class LevelListComponent implements OnInit {


  levels: Observable<any>;
  title: string = "Exercices"
  @Input() action: number;


  constructor(private levelService: LevelService,public loadingCtrl: LoadingController, private nav: NavController) {
    // If we navigated to this page, we will have an item available as a nav param
    this.levels = this.levelService.getLevels();
    console.log("LevelList Loaded");
  
  }

  ngOnInit() {}

  openPage(id){
    switch (this.action) {
      case 0:
        this.nav.pop();
        break;
    
      default:
        break;
    }
    
  }

}
