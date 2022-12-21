import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SharedDataService } from 'src/app/services/shared-data.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(public sharedDataService:SharedDataService){}

}
