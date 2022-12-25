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

  constructor(private router: Router) { 
    this.education = data.education
    this.projects = data.projects
    this.profile = data.profile
  }

  componentNavigation(page: string): void{
    this.router.navigate([`/${page}`])
  }
}
