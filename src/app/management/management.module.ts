import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { ManagementPageRoutingModule } from "./management-routing.module";

import { ManagementPage } from "./management.page";
import { GroupsListComponent } from "./groups-list/groups-list.component";
import { ComponentsModule } from '../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ManagementPageRoutingModule,
    ComponentsModule
  ],
  declarations: [
    ManagementPage, 
    GroupsListComponent,
  ]
})
export class ManagementPageModule {}
