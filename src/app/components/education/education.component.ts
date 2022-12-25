import { Component } from '@angular/core';
import { SharedDataService } from 'src/app/services/shared-data.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent {

  public education;

  constructor(public sharedDataService: SharedDataService){
    this.education = this.sharedDataService.education
  }

}
