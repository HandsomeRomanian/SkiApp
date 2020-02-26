import { Component, OnInit } from "@angular/core";
import { SkiService } from "../services/ski.service";
import { Storage } from "@ionic/Storage";
import { AuthService } from "../services/auth.service";
import { Router } from '@angular/router';

@Component({
  selector: "app-home",
  templateUrl: "./home.page.html",
  styleUrls: ["./home.page.scss"]
})
export class HomePage implements OnInit {
  title: string = "SkiApp";

  constructor(
    private SkiAPI: SkiService,
    public storage: Storage,
    private authAPI: AuthService,
    private router: Router
  ) {
  }

  profileClick() {
    this.router.navigate(['/login']);
  }

  ngOnInit() {
  }
}
