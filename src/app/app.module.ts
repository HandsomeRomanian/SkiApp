import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouteReuseStrategy } from "@angular/router";
import { IonicStorageModule } from '@ionic/Storage';
import { IonicModule, IonicRouteStrategy } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { HttpClientModule } from "@angular/common/http";
import { ExercicesPageModule } from "./exercices/exercices.module";
import { HomePageModule } from "./home/home.module";
import { SearchPageModule } from "./search/search.module";
import { NotFoundComponent } from "./not-found/not-found.component";
import { ManagementPageModule } from "./management/management.module";
import { AuthService } from './services/auth.service';
;

@NgModule({
  declarations: [AppComponent, NotFoundComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    IonicStorageModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    ExercicesPageModule,
    HomePageModule,
    SearchPageModule,
    ManagementPageModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    Storage
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
