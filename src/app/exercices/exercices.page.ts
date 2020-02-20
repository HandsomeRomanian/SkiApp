import { Component, OnInit } from "@angular/core";
import { SkiService } from "../services/ski.service";
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
  
  constructor(public skiService: SkiService) {  }

  ngOnInit() {
    console.log("ExercicesPage")
    
  }
}
