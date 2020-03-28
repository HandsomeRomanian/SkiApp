import { Component, OnInit } from "@angular/core";
import { PopoverController, NavParams, AlertController } from "@ionic/angular";
import { StudentService } from 'src/app/services/student.service';
import { ChangeListComponent } from '../change-list/change-list.component';

@Component({
  selector: "app-popover-comments",
  templateUrl: "./popover-options.component.html",
  styleUrls: ["./popover-options.component.scss"]
})
export class PopoverOptionsComponent implements OnInit {

  studentID = -1;
  groupID = -1;
  upgrades = [];

  constructor(private popoverCtrl: PopoverController,
    public navParams: NavParams,
    private studentService: StudentService,
    private popoverController: PopoverController,
    public alertController: AlertController) {
    this.studentID = this.navParams.get('studentID');
    this.groupID = this.navParams.get('groupID');
    this.studentService.getUpgrade(this.studentID, this.groupID).subscribe(
      resp => {
        resp.forEach(element => {
          var item = { name: element.id, type: 'radio', label: element.Number + " " + element.StudentCount + " élèves " + element.Teachername, value: element.id };
          this.upgrades.push(item);

        });
      })
  }

  ngOnInit() { }

  public async dismissPopover() {
    try {
      await this.popoverCtrl.dismiss();
    } catch (e) {
      //click more than one time popover throws error, so ignore...
    }
  }


  async getUpgrade() {
    let inputs = [];
    this.studentService.getUpgrade(this.studentID, this.groupID).subscribe(
      resp => {
        resp.forEach(element => {
          var item = { name: element.id, type: 'radio', label: element.Number + " " + element.StudentCount + " élèves " + element.Teachername, value: element.id };
          inputs.push(item);

        });
      }
    )
    const alert = await this.alertController.create({
      header: 'Radio',
      inputs: this.upgrades,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: data => {
            this.studentService.upgrade(this.studentID,data);
          }
        }
      ]
    });

    await alert.present();
  }
  async getDowngrade() {
    let inputs = [];
    this.studentService.getDowngrade(this.studentID, this.groupID).subscribe(
      resp => {
        resp.forEach(element => {
          var item = { name: element.id, type: 'radio', label: element.Number + " " + element.StudentCount + " élèves " + element.Teachername, value: element.id };
          inputs.push(item);

        });
      }
    )
    const alert = await this.alertController.create({
      header: 'Radio',
      inputs: this.upgrades,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: data => {
            this.studentService.downgrade(this.studentID,data);
          }
        }
      ]
    });

    await alert.present();
  }

  async openPopOver(action) {
    let popover = await this.popoverController.create({
      component: ChangeListComponent,
      translucent: true,
      componentProps: { action: action, groupID: this.groupID, studentID: this.studentID }
    });
    return popover.present().then();
  }
}
