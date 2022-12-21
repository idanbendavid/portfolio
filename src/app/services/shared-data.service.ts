import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {

  constructor(private router: Router) { }

  public name: string = 'idan ben david';
  public profession: string = 'full stack developer';

  componentNavigation(page: string): void{
    this.router.navigate([`/${page}`])
  }
}
