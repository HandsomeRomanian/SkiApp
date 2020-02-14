import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { Observable } from 'rxjs';
import { SkiProvider } from '../../providers/ski/ski';
import { GroupListPage } from '../group-list/group-list';
import { finalize } from 'rxjs/operators';
import { ExercicesListPage } from '../exercices-list/exercices-list';

@Component({
  selector: 'page-level-list',
  templateUrl: 'level-list.html',
})
export class LevelListPage {
  title = "Niveaux";
  levels: Observable<any>;
  action: number;

  constructor(public navCtrl: NavController, public navParams: NavParams,public skiService: SkiProvider,public loadingCtrl: LoadingController) {
    // If we navigated to this page, we will have an item available as a nav param
    this.action = navParams.get("action");
    console.log(this.action);
    this.levels = skiService.getLevels().pipe(
      finalize(()=>loading.dismiss())
      );
    let loading = this.loadingCtrl.create({
      content: ''
    });
  
    loading.present();
  }


  openPage(id: number){
    console.log(this.action+"-"+id);
    if (this.action == 1){
      console.log(id)
        this.navCtrl.setRoot(ExercicesListPage,{"levelID":id})
    }
    else if (this.action == 2){
      this.navCtrl.setRoot(GroupListPage,{"levelID":id,"action":this.action});
    }
  }

}
