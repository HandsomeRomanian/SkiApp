import { async } from '@angular/core/testing';
import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { SkiService } from "src/app/services/ski.service";
import { ActivatedRoute } from "@angular/router";
import { Student } from 'src/app/services/DTO';
import { ToastController, PopoverController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { PopoverOptionsComponent } from './popover-options/popover-options.component';

@Component({
  selector: "app-student-list",
  templateUrl: "./student-list.component.html",
  styleUrls: ["./student-list.component.scss"]
})
export class StudentListComponent implements OnInit {
  title = "Student List";
  groupID: number;
  group;
  students: Student[];
  observable: Observable<any>;

  constructor(private route: ActivatedRoute,
    private skiService: SkiService,
    public toastController: ToastController,
    private authService: AuthService,
    private popoverController: PopoverController
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
    let old = student.Status;
    student.Status = $event.detail.value;
    var output = { "status": student.Status, "studentID": student.id, "groupID": this.groupID };
    this.skiService.setStatus(output).subscribe(
      async () => {
        return;
      },
      async error => {
        if (error.error.text == "Ok") {
          return;
        }
        if (error.error == "InvalidToken") {
          this.authService.logout();
          const toast = await this.toastController.create({
            message: 'Veuillez vous reconnectez.',
            duration: 2000
          });
          toast.present();
        }
        else if (error.error == "NotAuthorized") {
          student.Status = old;
          const toast = await this.toastController.create({
            message: 'Vous n\'avez pas les permissions pour cette action.',
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

  async openPopOver(ev) {
    let popover = await this.popoverController.create({
      component: PopoverOptionsComponent,
      event: ev,
      translucent: true
    });
    return popover.present();
  }

}
