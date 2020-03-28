import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Groupe } from "src/app/services/DTO";
import { AuthService } from "src/app/services/auth.service";
import { GroupsService } from 'src/app/services/groups.service';
import { SkiService } from 'src/app/services/ski.service';

@Component({
  selector: "app-groups-list",
  templateUrl: "./groups-list.component.html",
  styleUrls: ["./groups-list.component.scss"]
})
export class GroupsListComponent implements OnInit {
  title: string = "Groupes";
  onlyCurrent = true;
  listVisibility = true;
  data: Groupe[];
  public groups: Groupe[] = [];

  constructor(
    private route: ActivatedRoute,
    private groupService: GroupsService,
    private authService: AuthService
  ) {
    this.authService.checkConnected();
    const levelID = this.route.snapshot.params.id;
    this.groupService.getGroupsByLevel(levelID).subscribe(resp => {
      this.groups = resp;
      this.data = resp;
      this.title = SkiService.levels[resp[0].Level];
    });
  }

  ngOnInit() {
  }

  getGroups() {
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

  currentClass(inGroup: Groupe) {
    let classe = new Date();
    let timeAr = inGroup.Time.split(":");
    classe.setHours(timeAr[0], timeAr[1], timeAr[2]);

    if (
      inGroup.Level < 3 &&
      classe.getTime() < new Date().getTime() &&
      new Date().getTime() < classe.setHours(classe.getHours() + 1) && (
      (new Date().getDay() == 0 && inGroup.day == new Date().getDay()+7)|| (new Date().getDay() != 0 && inGroup.day == new Date().getDay())) ) 
    {
      return true;
    } else if (
      inGroup.Level >= 3 &&
      classe.getTime() < new Date().getTime() &&
      new Date().getTime() <
        classe.setHours(classe.getHours() + 1, classe.getMinutes() + 30) &&
      inGroup.day == new Date().getDay())
    {
      return true;
    }
  }
}
