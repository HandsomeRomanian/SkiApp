import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from '../components/shared.module';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  }, {
    path: 'logout',
    component: LogoutComponent
  }
];


@NgModule({
  declarations: [LoginComponent, LogoutComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule
  ]
})
export class AuthModule { }
