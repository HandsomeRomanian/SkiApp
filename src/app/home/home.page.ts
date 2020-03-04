import { Component, OnInit } from "@angular/core";
<<<<<<< HEAD
<<<<<<< HEAD
=======
import { HttpClient, HttpHeaders } from '@angular/common/http';
>>>>>>> Ionic-Capacitor
=======
import { HttpClient, HttpHeaders } from '@angular/common/http';
>>>>>>> a551801c7f460bfe262d113f18fe8f1b82938609

@Component({
  selector: "app-home",
  templateUrl: "./home.page.html",
  styleUrls: ["./home.page.scss"]
})
export class HomePage implements OnInit {
  
  allo: string;
<<<<<<< HEAD
<<<<<<< HEAD
  display:string;
  constructor( ) { }
=======
  display;
  constructor( private http: HttpClient ) { }
>>>>>>> Ionic-Capacitor
=======
  display;
  constructor( private http: HttpClient ) { }
>>>>>>> a551801c7f460bfe262d113f18fe8f1b82938609


  ngOnInit() {

    
  }

  sync(){
    window.localStorage.setItem("test",this.allo);
    this.display = window.localStorage.getItem("test");
  }
}
