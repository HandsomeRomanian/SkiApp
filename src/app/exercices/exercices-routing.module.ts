import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExercicesPage } from './exercices.page';
import { LevelListComponent } from '../components/level-list/level-list.component';
import { ExerciceListComponent } from './exercice-list/exercice-list.component';
import { ExerciceInfoComponent } from './exercice-info/exercice-info.component';

const routes: Routes = [
  {
    path: '',
    component: ExercicesPage
  },{
    path: ':id',
    component: ExerciceListComponent
  },{
    path: ':id/info',
    component: ExerciceInfoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExercicesPageRoutingModule {}
