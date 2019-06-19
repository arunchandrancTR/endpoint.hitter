import { Component, OnInit } from '@angular/core';
import { Settings } from './settings';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'endpointHitter';
  apiUrl = 'nothing';
  response = '';

  constructor(settings: Settings, private httpClient: HttpClient) {
    this.apiUrl = settings.apiUrl;
  }

  ngOnInit(): void {

    this.httpClient.get(this.apiUrl).subscribe( response =>  {
      this.response = JSON.stringify(response);
    })  

  }
}
