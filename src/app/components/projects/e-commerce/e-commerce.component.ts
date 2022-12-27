import { Component } from '@angular/core';
import { SharedDataService } from 'src/app/services/shared-data.service';

@Component({
  selector: 'app-e-commerce',
  templateUrl: './e-commerce.component.html',
  styleUrls: ['./e-commerce.component.css']
})
export class ECommerceComponent {

  public eCommerce;
  constructor(public sharedDataService: SharedDataService){
    this.eCommerce = this.sharedDataService.projects[1];
    console.log(this.eCommerce)
  }

}
