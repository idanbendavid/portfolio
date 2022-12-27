import { Component } from '@angular/core';
import { SharedDataService } from 'src/app/services/shared-data.service';

@Component({
  selector: 'app-trainer',
  templateUrl: './trainer.component.html',
  styleUrls: ['./trainer.component.css']
})
export class TrainerComponent {

  public trainer;

  constructor(public sharedDataService: SharedDataService){
    this.trainer = this.sharedDataService.projects[2];
  }

}
