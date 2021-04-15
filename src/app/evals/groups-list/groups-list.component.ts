import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { SkiService } from "src/app/services/ski.service";
import { Group } from "src/app/services/DTO";
import { AuthService } from "src/app/services/auth.service";
import { GroupService } from "../services/group.service";

@Component({
  selector: "app-groups-list",
  templateUrl: "./groups-list.component.html",
  styleUrls: ["./groups-list.component.scss"]
})
export class GroupsListComponent implements OnInit {
  public title: string = "Groupes";
  public onlyCurrent = true;
  public listVisibility = true;
  public data: Group[];
  public groups: Group[] = [];

  public day = [
    "Lundi",
    "Mardi",
    "Mercredi",
    "Jeudi",
    "Vendredi",
    "Samedi",
    "Dimanche"
  ];

  constructor(
    private route: ActivatedRoute,
    private groupService: GroupService,
    private authService: AuthService
  ) {
    this.authService.checkConnected();
    const levelID = this.route.snapshot.params.id;
    this.groupService.getGroupsByLevel(levelID).subscribe(resp => {
      this.groups = resp;
      this.data = resp;
      this.title = SkiService.levels[resp[0].levelId];
      console.log(this.groups[0].teacher);

    });
  }

  ngOnInit() {
  }

  getGroups(): Group[] {
    this.data = [];
    if (!this.onlyCurrent) {
      this.data = this.groups;
      return this.data;
    } else {
      this.data = this.groups.filter(group => this.currentClass(group));
    }
    return this.data;
  }

  updateList() {
    this.listVisibility = !this.listVisibility;
    this.getGroups();
    this.listVisibility = !this.listVisibility;
  }

  currentClass(inGroup: Group) {
    let classe = new Date();
    let timeAr = inGroup.time.split(":");
    classe.setHours(Number.parseInt(timeAr[0]), Number.parseInt(timeAr[1]), Number.parseInt(timeAr[2]));
    if (
      inGroup.levelId < 3 &&
      classe.getTime() < new Date().getTime() &&
      new Date().getTime() < classe.setHours(classe.getHours() + 1) && (
        (new Date().getDay() == 0 && inGroup.day == new Date().getDay() + 7) || (new Date().getDay() != 0 && inGroup.day == new Date().getDay()))) {
      return true;
    } else if (
      inGroup.levelId >= 3 &&
      classe.getTime() < new Date().getTime() &&
      new Date().getTime() <
      classe.setHours(classe.getHours() + 1, classe.getMinutes() + 30) &&
      inGroup.day == new Date().getDay()) {
      return true;
    }
  }
}
