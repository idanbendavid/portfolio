import { Component } from '@angular/core';
import { SharedDataService } from 'src/app/services/shared-data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  public profile;
  constructor(public shareDataService: SharedDataService){
    this.profile = this.shareDataService.profile[0];
  }
}
