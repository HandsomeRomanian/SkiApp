import { Component, OnInit } from "@angular/core";
import { NavParams } from "@ionic/angular";
import { ActivatedRoute, Router } from "@angular/router";
import { SkiService } from "src/app/services/ski.service";
import { Groupe } from "src/app/services/DTO";

@Component({
  selector: "app-groups-list",
  templateUrl: "./groups-list.component.html",
  styleUrls: ["./groups-list.component.scss"]
})
export class GroupsListComponent implements OnInit {
  title: string = "Groupes";
  onlyCurrent: any;
  listVisibility = true;
  data: Groupe[];
  public groups: Groupe[];
  day = [
    "Lundi",
    "Mardi",
    "Mercredi",
    "Jeudi",
    "Vendredi",
    "Samedi",
    "Dimanche"
  ];

  constructor(private route: ActivatedRoute, private SkiAPI: SkiService) {
    const levelID = this.route.snapshot.params.id;
    this.SkiAPI.getGroups(levelID).subscribe(resp => {
      this.groups = resp;
      this.data = resp;
    });
  }

  ngOnInit() { }

  getGroups() {
    this.data = [];
    if (!this.onlyCurrent) {
      this.data = this.groups;
      return this.data;
    } else {
      this.data = this.groups.filter(group => this.currentClass(group))
      console.log(this.data)
    }
    return this.data
  }

  updateList() {
    this.listVisibility = !this.listVisibility;
    this.getGroups()
    this.listVisibility = !this.listVisibility;
  }

  currentClass(inGroup: Groupe) {
    let classe = new Date();
    let timeAr = inGroup.Time.split(":");
    classe.setHours(timeAr[0], timeAr[1], timeAr[2]);

    let output = !(
      classe.getTime() > new Date().getTime() &&
      new Date().getTime() < classe.setHours(classe.getHours() + 1)
    );
    console.log(output)
    return output;
  }
}
