import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-change-list',
  templateUrl: './change-list.component.html',
  styleUrls: ['./change-list.component.css']
})
export class ChangeListComponent implements OnInit {

  constructor(private popoverCtrl: PopoverController) { }

  ngOnInit() {
  }

  public async dismissPopover() {
    try {
      await this.popoverCtrl.dismiss();
    } catch (e) {
      //click more than one time popover throws error, so ignore...
    }
  }

}
