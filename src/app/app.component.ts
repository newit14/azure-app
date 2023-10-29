import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Hello} from "../model/hello";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'azure-app';
  messageDto: Hello = {message: 'load from backend...'};


  constructor(private httpClient: HttpClient ) {
  }

  ngOnInit(): void {
    this.httpClient.get<Hello>("https://french-app.jollywater-bf4065db.westeurope.azurecontainerapps.io")
      .subscribe(r =>
    this.messageDto = r)
  }

}
//https://french-app.jollywater-bf4065db.westeurope.azurecontainerapps.io
