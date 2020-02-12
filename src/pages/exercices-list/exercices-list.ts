import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { SkiProvider } from '../../providers/ski/ski';
import { Observable } from 'rxjs';

/**
 * Generated class for the ExercicesListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-exercices-list',
  templateUrl: 'exercices-list.html',
})
export class ExercicesListPage {

  levelID: number;
  exercices: Observable<any>;


  constructor(public navCtrl: NavController, public navParams: NavParams, private skiService: SkiProvider, public loadingCtrl: LoadingController) {
    console.log(navParams.get("levelID"))
    this.levelID = navParams.get("levelID");
    this.exercices = this.skiService.getExercices(this.levelID);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ExercicesListPage');
  }

}
