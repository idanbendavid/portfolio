import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import data from "../../assets/portfolio.json";

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {

  public education;
  public projects;
  public profile;
  public certificates;

  constructor(private router: Router) {
    this.education = data.education
    this.projects = data.projects
    this.profile = data.profile
    this.certificates = data.certificates
  }

  componentNavigation(page: string): void {

    if (page == 'projects/portfolio') {
      this.router.navigate(['/about'])
    } else {
      this.router.navigate([`/${page}`])
    }
  }

}
