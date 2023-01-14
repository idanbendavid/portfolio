import { Component } from '@angular/core';
import { SharedDataService } from 'src/app/services/shared-data.service';

@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.css']
})
export class CertificatesComponent {

  public certificates;

  constructor(public sharedDataService: SharedDataService) {
    this.certificates = this.sharedDataService.certificates;
  }

}
