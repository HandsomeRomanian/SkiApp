import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { SkiService } from "src/app/services/ski.service";
import { ActivatedRoute } from "@angular/router";
import { Student } from 'src/app/services/DTO';
import { ToastController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: "app-student-list",
  templateUrl: "./student-list.component.html",
  styleUrls: ["./student-list.component.scss"]
})
export class StudentListComponent implements OnInit {
  title = "Student List";
  groupID: number;
  group;
  students: Observable<any>;

  constructor(private route: ActivatedRoute,
    private skiService: SkiService,
    public toastController: ToastController,
    private authService: AuthService
  ) {
    this.groupID = this.route.snapshot.params.id;
  }
  ngOnInit(): void {
    this.skiService.getGroup(this.groupID).subscribe(resp => {
      this.group = resp;
      console.table(resp)
      this.students = this.group.Students;
      this.title =
        SkiService.levels[this.group.Level] +
        " " + this.group.Number +
        " " + this.group.Time.substring(0, 5) +
        " " + SkiService.days[this.group.day];
    });
  }

  statusChange(student: Student, $event) {
    student.Status = $event.detail.value;
    var output = { "status": student.Status, "studentID": student.id };
    this.skiService.setStatus(output).subscribe(
      success => { },
      async error => {
        if (error.error == "InvalidToken") {
          this.authService.logout();
          const toast = await this.toastController.create({
            message: 'Veuillez vous reconnectez.',
            duration: 2000
          });
          toast.present();
        }
        else {
          const toast = await this.toastController.create({
            message: 'Une Erreur est survenue.',
            duration: 2000
          });
          toast.present();
        }
      }
    );
  }



  getStatusList() {
    return SkiService.status;
  }



}
