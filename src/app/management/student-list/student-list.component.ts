import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { SkiService } from "src/app/services/ski.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-student-list",
  templateUrl: "./student-list.component.html",
  styleUrls: ["./student-list.component.scss"]
})
export class StudentListComponent {
  title = "Student List";
  groupID: number;
  group;
  students: Observable<any>;
  action: number;

  constructor(private route: ActivatedRoute, private skiService: SkiService) {
    this.groupID = this.route.snapshot.params.id;

    this.skiService.getGroup(this.groupID).subscribe(resp => {
      this.group = resp;
      this.students = this.group.Students;
      this.students.forEach(element => {
        element.Status = SkiService.status[element.Status];
      });
      this.title =
        SkiService.levels[this.group.Level] +
        " " +
        this.group.Number +
        " " +
        this.group.Time;
      console.log(this.group);
    });
  }

  statusChange(student) {
    console.table(student)
    var output = { "status": student.Status, "studentID": student.id };
    console.table(output)
    this.skiService.setStatus(output).subscribe(x => {
      if (x) {
        location.reload()
      }
    })
  }

  getStatusList() {
    return SkiService.status;
  }

  doRefresh(event) {
    this.skiService.getGroup(this.groupID).subscribe(resp => {
      this.group = resp;
      this.students = this.group.Students;
      this.students.forEach(element => {
        element.Status = SkiService.status[element.Status];
      });
      event.complete();
    });
  }

}
