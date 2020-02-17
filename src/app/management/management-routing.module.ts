import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManagementPage } from './management.page';
import { GroupsListComponent } from './groups-list/groups-list.component';

const routes: Routes = [
  {
    path: '',
    component: ManagementPage
  },
  {
    path: ':id',
    component : GroupsListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManagementPageRoutingModule {}
