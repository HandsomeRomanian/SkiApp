import { NgModule } from "@angular/core";
import { IonicModule } from "@ionic/angular";
import { LevelListComponent } from "./level-list/level-list.component";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [LevelListComponent],
  imports: [CommonModule, IonicModule, RouterModule],
  exports: [LevelListComponent]
})
export class ComponentsModule {}
