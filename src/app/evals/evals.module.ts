import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ManagementPageRoutingModule } from './evals-routing.module';
import { EvalsPage } from './evals.page';
import { GroupsListComponent } from './groups-list/groups-list.component';
import { StudentListComponent } from './student-list/student-list.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ManagementPageRoutingModule,
    SharedModule,
  ],
  declarations: [EvalsPage, GroupsListComponent, StudentListComponent],
})
export class ManagementPageModule {}
