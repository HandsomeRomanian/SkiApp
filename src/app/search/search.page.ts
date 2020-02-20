import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SkiService } from '../services/ski.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage{

  
  title: string = "Recherche";
  search: string = "";
  students: Observable<any>;
  constructor(private skiAPI: SkiService) { }

  ionViewDidLoad() {
    console.log("ionViewDidLoad SearchPage");
  }

  onSearchChange($event) {
    this.search = $event.target.value.trim();
    if (this.search && this.search != "") {
      this.search.replace(" ", "_");
      this.students = this.skiAPI.search(this.search);

    }
  }

}
