import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs';
import { SkiProvider } from '../../providers/ski/ski';

/**
 * Generated class for the GroupListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-group-list',
  templateUrl: 'group-list.html',
})
export class GroupListPage {
  groups: Observable<any>;
  title: String = "Temp"
  levelID = 0;
  action = 0;
  day = ['Lundi', 'Mardi', 'Mercredi','Jeudi','Vendredi','Samedi','Dimanche'];

  constructor(public navCtrl: NavController, public navParams: NavParams, private skiService: SkiProvider) {
    this.levelID = navParams.get("levelID");
    this.action = navParams.get("action");
    this.groups = this.skiService.getGroups(this.levelID);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GroupListPage');
  }

  openPage(grp){
console.log(grp.day);
  }

}
