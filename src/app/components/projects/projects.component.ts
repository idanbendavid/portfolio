import { Component } from '@angular/core';
import { SharedDataService } from 'src/app/services/shared-data.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {

  public projects;

  constructor(public sharedDataService: SharedDataService){
    this.projects = this.sharedDataService.projects;  
  }
}
