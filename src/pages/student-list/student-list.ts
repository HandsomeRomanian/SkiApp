import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { Observable } from 'rxjs';
import { SkiProvider } from '../../providers/ski/ski';

@Component({
  selector: 'page-student-list',
  templateUrl: 'student-list.html',
})

export class StudentListPage {

  title = "Student List";
  groupID: number;
  group;
  students: Observable<any>;
  action: number;



  constructor(public navCtrl: NavController, public navParams: NavParams, private skiService: SkiProvider, public loadingCtrl: LoadingController) {
    this.groupID = navParams.get("groupID");
    this.action = navParams.get("action");
    this.skiService.getGroup(this.groupID).subscribe(resp => {
      this.group = resp;
      this.students = this.group.Students;
      this.students.forEach(element => {
        element.Status = SkiProvider.status[element.Status];
      });
      this.title = SkiProvider.levels[this.group.Level] + " " + this.group.Number + " " + this.group.Time;
      console.log(this.group);
    });

  }

  statusChange(student) {
    var tempstatus;
    console.log(student.id + ":" + student.Status);
    for (let index = 0; index < SkiProvider.status.length; index++) {
      if (SkiProvider.status[index] == student.Status) {
        tempstatus = index;
        break;
      }
    }
    var output = { "status": tempstatus, "studentID": student.id };
    this.skiService.setStatus(output).subscribe(x => {
      if (x) {
        this.navCtrl.push(StudentListPage, { "groupID": this.groupID, "action": this.action });
      }
    })
  }

  getStatusList() {
    return SkiProvider.status;
  }

  doRefresh(event) {
    this.skiService.getGroup(this.groupID).subscribe(resp => {
      this.group = resp;
      this.students = this.group.Students;
      this.students.forEach(element => {
        element.Status = SkiProvider.status[element.Status];
      });
      console.log(event)
      event.complete();
    });
  }

}
