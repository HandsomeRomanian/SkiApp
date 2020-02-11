import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs';
import { SkiProvider } from '../../providers/ski/ski';
import { GroupListPage } from '../group-list/group-list';

@Component({
  selector: 'page-level-list',
  templateUrl: 'level-list.html',
})
export class LevelListPage {
  levels: Observable<any>;
  action: number;

  constructor(public navCtrl: NavController, public navParams: NavParams,public skiService: SkiProvider) {
    // If we navigated to this page, we will have an item available as a nav param
    
    this.levels = skiService.getLevels();
  }


  openPage(id: number){
    this.navCtrl.push(GroupListPage,{"levelID":id,"action":this.action});
  }

}
