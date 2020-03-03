import { Component, OnInit } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: "app-home",
  templateUrl: "./home.page.html",
  styleUrls: ["./home.page.scss"]
})
export class HomePage implements OnInit {
  
  allo: string;
  display;
  constructor( private http: HttpClient ) { }


  ngOnInit() {

    
  }

  sync(){
    window.localStorage.setItem("test",this.allo);
    this.display = window.localStorage.getItem("test");
  }
}
