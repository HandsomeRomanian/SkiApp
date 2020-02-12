import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { Observable } from 'rxjs';
import { SkiProvider } from '../../providers/ski/ski';
import { finalize } from 'rxjs/operators';

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
  onlyCurrent: boolean = true;
  levelID = 0;
  action = 0;
  day = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];

  constructor(public navCtrl: NavController, public navParams: NavParams, private skiService: SkiProvider, public loadingCtrl: LoadingController) {
    this.levelID = navParams.get("levelID");
    this.action = navParams.get("action");

    this.groups = this.skiService.getGroups(this.levelID).pipe(
      finalize(() => loading.dismiss())
    );
    let loading = this.loadingCtrl.create({
      content: ''
    });

    loading.present();

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GroupListPage');
  }


  currentClass(inTime) {
    var temp = new Date();
    var timeAr = inTime.split(":");
    temp.setHours(timeAr[0],timeAr[1],timeAr[2]) 
    
    return !(temp.getTime() > new Date().getTime() && new Date().getTime() < temp.setHours(temp.getHours()+1));

  }

  getTime() {
    var date = new Date();
    return date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
  }

  openPage(grp) {
    console.log(grp.day);
  }

}
