import { NgModule } from "@angular/core";
import { IonicModule } from "@ionic/angular";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { LevelListComponent } from "./level-list/level-list.component";
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [LevelListComponent,HeaderComponent],
  imports: [CommonModule, IonicModule, RouterModule],
  exports: [LevelListComponent,HeaderComponent]
})
export class SharedModule {}
