import { Component, OnInit } from '@angular/core';
import { ToastController, PopoverController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

import { SkiService } from 'src/app/shared/services/ski.service';
import { Group, Student } from 'src/app/shared/services/DTO';
import { AuthService } from 'src/app/shared/services/auth.service';
import { PopoverOptionsComponent } from './popover-options/popover-options.component';
import { GroupService } from 'src/app/shared/services/group.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss'],
})
export class StudentListComponent implements OnInit {
  title = 'Student List';
  groupID: number;
  group: Group;
  students: Student[];

  constructor(
    private route: ActivatedRoute,
    private skiService: SkiService,
    public toastController: ToastController,
    private authService: AuthService,
    private groupService: GroupService,
    private popoverController: PopoverController
  ) {
    this.groupID = this.route.snapshot.params.id;
  }
  ngOnInit(): void {
    this.groupService.getGroup(this.groupID).subscribe((resp) => {
      this.group = resp[0];
      this.students = this.group.studentgroups.map((x) => ({
        ...x,
        ...x.student,
      }));

      this.title =
        SkiService.levels[this.group.levelId] +
        ' ' +
        this.group.number +
        ' ' +
        this.group.time +
        ' ' +
        SkiService.days[this.group.day];
    });
  }

  public statusChange(student: Student, $event) {
    let oldStatus = student.status;
    student.status = $event.detail.value;

    this.skiService.setStatus(student).subscribe(
      (success) => {
        console.log(success);
        if (success['resp'] != 'ok') {
          student.status = oldStatus;
        }
      },
      async (error) => {
        if (error.error == 'InvalidToken') {
          this.authService.logout();
          const toast = await this.toastController.create({
            message: 'Veuillez vous reconnectez.',
            duration: 2000,
          });
          toast.present();
        } else {
          const toast = await this.toastController.create({
            message: 'Une Erreur est survenue.',
            duration: 2000,
          });
          toast.present();
        }
      }
    );
  }

  public getStatusList() {
    return SkiService.status;
  }

  public async openPopOver(ev) {
    let popover = await this.popoverController.create({
      component: PopoverOptionsComponent,
      event: ev,
      translucent: true,
    });
    return popover.present();
  }
}
