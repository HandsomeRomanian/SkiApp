import { Component, OnInit } from "@angular/core";
import { Storage } from '@ionic/Storage';

import { Platform } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";
import { Employe } from "./services/DTO";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.scss"]
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public user = "Non connecté"
  public appPages = [
    {
      title: "Home",
      url: "/home",
      icon: "home"
    },
    {
      title: "Exercices",
      url: "/exercices",
      icon: "paper-plane"
    },
    {
      title: "Gestion",
      url: "/evals",
      icon: "clipboard"
    },
    {
      title: "Recherche",
      url: "/search",
      icon: "search"
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private storage: Storage
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    const path = window.location.pathname.replace("/", "");
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(
        page => page.url.replace("/", "").toLowerCase() === path.toLowerCase()
      );
      console.log(this.selectedIndex)
    }

    this.storage.get("User").then(val => {
      if (val != null) {
        this.user = val.name;
      }
    });
  }
}
