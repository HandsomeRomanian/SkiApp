import { Component, OnInit } from "@angular/core";
import { PopoverController } from "@ionic/angular";

@Component({
  selector: "app-popover-options",
  templateUrl: "./popover-options.component.html",
  styleUrls: ["./popover-options.component.scss"]
})
export class PopoverOptionsComponent implements OnInit {
  constructor(private popoverCtrl: PopoverController) {}

  ngOnInit() {}

  public async dismissPopover() {
    try {
      await this.popoverCtrl.dismiss();
    } catch (e) {
      //click more than one time popover throws error, so ignore...
    }
  }
}
