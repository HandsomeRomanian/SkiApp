import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { HTTP } from '@ionic-native/http/ngx';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { GroupListPage } from '../pages/group-list/group-list';
import { LevelListPage } from "../pages/level-list/level-list";
import { StudentListPage } from "../pages/student-list/student-list";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SkiProvider } from '../providers/ski/ski';
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LevelListPage,
    GroupListPage,
    StudentListPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule  
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LevelListPage,
    GroupListPage,
    StudentListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SkiProvider,
    HTTP
  ]
})
export class AppModule {}
