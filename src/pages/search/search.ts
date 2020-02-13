import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import { SkiProvider } from "../../providers/ski/ski";
import { Observable } from "rxjs";

/**
 * Generated class for the SearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: "page-search",
  templateUrl: "search.html"
})
export class SearchPage {
  search: string = "";
  students: Observable<any>;
  constructor(public navCtrl: NavController, public navParams: NavParams,private skiAPI: SkiProvider) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad SearchPage");
  }

  onSearchChange($event) {
    this.search = $event.value.trim();
    if (this.search && this.search != ""){
      this.search.replace(" ","_");
      this.students = this.skiAPI.search(this.search);

    }
  }
}
