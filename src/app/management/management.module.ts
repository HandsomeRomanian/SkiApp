import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { ManagementPageRoutingModule } from "./management-routing.module";
import { ManagementPage } from "./management.page";
import { GroupsListComponent } from "./groups-list/groups-list.component";
import { SharedModule } from '../components/shared.module';
import { StudentListComponent } from './student-list/student-list.component';
import { PopoverOptionsComponent } from './student-list/popover-options/popover-options.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ManagementPageRoutingModule,
    SharedModule,
  ],
  declarations: [
    ManagementPage, 
    GroupsListComponent,
    StudentListComponent,
    PopoverOptionsComponent,
  ],
  entryComponents: [
    PopoverOptionsComponent,
    
  ]
})
export class ManagementPageModule {}
