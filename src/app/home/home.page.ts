import { Component, OnInit } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Push, PushObject, PushOptions } from '@ionic-native/push/ngx';
import { FingerprintAIO } from '@ionic-native/fingerprint-aio/ngx';

@Component({
  selector: "app-home",
  templateUrl: "./home.page.html",
  styleUrls: ["./home.page.scss"]
})
export class HomePage {

  allo: string;


  constructor(private http: HttpClient,private faio: FingerprintAIO) { }


  ngOnInit() {
    this.faio.isAvailable().then(
      resp => console.log(resp)
    );

  
   
  }




}
