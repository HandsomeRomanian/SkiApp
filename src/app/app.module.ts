import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicStorageModule } from '@ionic/storage';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ExercicesPageModule } from './exercices/exercices.module';
import { SearchPageModule } from './search/search.module';
import { ManagementPageModule } from './evals/evals.module';
import { AuthModule } from './auth/auth.module';
import { PopoverOptionsComponent } from './evals/student-list/popover-options/popover-options.component';
import { SharedModule } from './shared/shared.module';
import { NotFoundComponent } from './public/not-found/not-found.component';
import { HomeComponent } from './public/home/home.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    PopoverOptionsComponent,
    HomeComponent,
    ProfileComponent,
  ],
  entryComponents: [PopoverOptionsComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    IonicStorageModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    ExercicesPageModule,
    IonicModule,
    SearchPageModule,
    ManagementPageModule,
    AuthModule,
    SharedModule,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
