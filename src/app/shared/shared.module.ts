import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { SkiService } from './services/ski.service';
import { AuthService } from './services/auth.service';
import { UserService } from './services/user.service';
import { HeaderComponent } from './components/header/header.component';
import { LevelListComponent } from './components/level-list/level-list.component';

@NgModule({
  declarations: [HeaderComponent, LevelListComponent],
  imports: [CommonModule, IonicModule],
  providers: [SkiService, AuthService, UserService],
  exports: [HeaderComponent, LevelListComponent],
})
export class SharedModule {}
