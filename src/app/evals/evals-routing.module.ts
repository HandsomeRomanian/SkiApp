import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EvalsPage } from './evals.page';
import { GroupsListComponent } from './groups-list/groups-list.component';
import { StudentListComponent } from './student-list/student-list.component';

const routes: Routes = [
  {
    path: '',
    component: EvalsPage
  },
  {
    path: ':id',
    component : GroupsListComponent
  },
  {
    path: 'group/:id',
    component : StudentListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManagementPageRoutingModule {}
