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
import { ManagementPageModule } from "./evals/evals.module";
import { AuthService } from './services/auth.service';
import { AuthModule } from './auth/auth.module';
import { SkiService } from './services/ski.service';
import { SharedModule } from './components/shared.module';
import { PopoverOptionsComponent } from './evals/student-list/popover-options/popover-options.component';

@NgModule({
  declarations: [AppComponent, NotFoundComponent,PopoverOptionsComponent],
  entryComponents: [PopoverOptionsComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    IonicStorageModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    ExercicesPageModule,
    HomePageModule,
    SearchPageModule,
    ManagementPageModule,
    AuthModule,
    SharedModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    SkiService,
    AuthService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
