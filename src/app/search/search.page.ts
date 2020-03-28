import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SkiService } from '../services/ski.service';
import { AuthService } from '../services/auth.service';
import { NavController, AlertController } from '@ionic/angular';
import { Student } from '../services/DTO';
import { RouterModule, Router } from '@angular/router';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  title: string = "Recherche";
  search: string = "";
  students: Observable<any>;

  constructor(
    private studentService: StudentService,
    private authService: AuthService,
    private alertController: AlertController,
    private router: Router) {
    this.authService.checkConnected()
  }

  ngOnInit(): void {
  }

  async showInfoAlert(result: any) {
    const alert = await this.alertController.create({
      header: 'Informations sur l\'étudiant',
      subHeader: result.student.Name + " : " + SkiService.status[result.student.Status],
      //message: 'Groupe '+result.group.Number + " à " + result.group.Time + " le " + SkiService.days[result.group.day-1],
      message: SkiService.days[result.group.day - 1] + " " + result.group.Time.substring(0, 5) + '\n Groupe: ' + result.group.Number + "\n"
        + "Niveau: " + SkiService.levels[result.group.Level] + "\nMoniteur: " + result.group.TeacherName,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
          }
        }, {
          text: 'Groupe',
          handler: () => {
            this.router.navigate(['/management/group/' + result.group.id])
          }
        }
      ]
    });

    await alert.present();
  }

  onSearchChange($event) {

    this.authService.checkConnected()
    this.search = $event.target.value.trim();
    if (this.search && this.search != "") {
      this.search.replace(" ", "_");
      this.students = this.studentService.search(this.search);
    }
  }

}
