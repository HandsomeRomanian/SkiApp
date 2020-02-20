import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SkiService } from '../services/ski.service';

@Component({
  selector: 'app-management',
  templateUrl: './management.page.html',
  styleUrls: ['./management.page.scss'],
})
export class ManagementPage implements OnInit {

  title: string = "Gestion";
  levels: Observable<any>;

  constructor(public skiService: SkiService) {
    this.levels = skiService.getLevels();
   }

  ngOnInit() {
  }

}
