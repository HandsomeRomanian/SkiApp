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

    
    const httpOptions = {
      headers: new HttpHeaders({
        "Token": '114627',
        "test": "placeholder"
      })
    };

    this.http.get("http://localhost:1234/test",httpOptions).subscribe(resp=>{
      console.log(resp);
      this.display = resp;
    })
  }

  sync(){
    window.localStorage.setItem("test",this.allo);
    this.display = window.localStorage.getItem("test");
  }

  sync(){
    window.localStorage.setItem("test",this.allo);
    this.display = window.localStorage.getItem("test");
  }
}
