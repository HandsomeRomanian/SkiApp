import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

import { SkiService } from '../shared/services/ski.service';
import { AuthService } from '../shared/services/auth.service';
import { Group, Student } from '../shared/services/DTO';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  title: string = 'Recherche';
  search: string = '';
  list: Group[] | Student[] = [];
  SkiService = SkiService;

  constructor(
    private skiAPI: SkiService,
    private authService: AuthService,
    private alertController: AlertController,
    private router: Router
  ) {
    this.authService.checkConnected();
  }

  ngOnInit(): void {}

  async showInfoAlert(result: Student) {
    console.log(result);
    const alert = await this.alertController.create({
      header: "Informations sur l'étudiant",
      subHeader: result.firstName + ' : ' + SkiService.status[result.status],
      //message: 'Groupe '+result.group.Number + " à " + result.group.Time + " le " + SkiService.days[result.group.day-1],
      message:
        SkiService.days[result.group.day - 1] +
        ' ' +
        result.group.time.substring(0, 5) +
        '\n Groupe: ' +
        result.group.number +
        '\n' +
        'Niveau: ' +
        SkiService.levels[result.group.levelId] +
        '\nMoniteur: ' +
        result.group.teacher.firstName,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {},
        },
        {
          text: 'Groupe',
          handler: () => {
            this.router.navigate(['/evals/group/' + result.group.groupId]);
          },
        },
      ],
    });

    await alert.present();
  }

  onSearchChange($event) {
    this.authService.checkConnected();
    this.search = $event.target.value.trim();
    if (this.search && this.search != '') {
      this.search.replace(' ', '_');
      this.skiAPI.search(this.search).subscribe((x) => {
        console.log(x);
        if (x != null && x.length > 0) {
          this.list = x;
        }
      });
    }
  }
}
