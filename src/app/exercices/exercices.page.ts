import { Component, OnInit } from "@angular/core";
import { SkiService } from "../SkiAPI/ski.service";
import { Observable } from "rxjs";
import { finalize } from "rxjs/operators";
import { LoadingController, NavController, NavParams } from "@ionic/angular";

@Component({
  selector: "app-exercices",
  templateUrl: "./exercices.page.html",
  styleUrls: ["./exercices.page.scss"]
})
export class ExercicesPage implements OnInit {
  title: string = "Exercices";
  levels: Observable<any>;

  
  constructor(public skiService: SkiService) {
    // If we navigated to this page, we will have an item available as a nav param
    this.levels = skiService.getLevels();
  
  }

  ngOnInit() {
    console.log("ExercicesPage")
    
  }
}
