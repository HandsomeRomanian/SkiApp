import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SkiService } from '../services/ski.service';
import { AuthService } from '../services/auth.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  title: string = "Recherche";
  search: string = "";
  students: Observable<any>;

  constructor(private skiAPI: SkiService,
    private authService: AuthService) {
    this.authService.checkConnected()
  }

  ngOnInit(): void {
  }


  onSearchChange($event) {

    this.authService.checkConnected()
    this.search = $event.target.value.trim();
    if (this.search && this.search != "") {
      this.search.replace(" ", "_");
      this.students = this.skiAPI.search(this.search);

    }
  }

}
