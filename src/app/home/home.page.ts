import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.page.html",
  styleUrls: ["./home.page.scss"]
})
export class HomePage implements OnInit {
  
  allo: string;
  display:string;
  constructor( ) { }


  ngOnInit() {
  }

  sync(){
    window.localStorage.setItem("test",this.allo);
    this.display = window.localStorage.getItem("test");
  }
}
