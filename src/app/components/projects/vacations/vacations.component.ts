import { Component } from '@angular/core';
import { SharedDataService } from 'src/app/services/shared-data.service';

@Component({
  selector: 'app-vacations',
  templateUrl: './vacations.component.html',
  styleUrls: ['./vacations.component.css']
})
export class VacationsComponent {

  public vacations;
  
  constructor(public sharedDataService: SharedDataService){
    this.vacations = this.sharedDataService.projects[0];
  }
}
