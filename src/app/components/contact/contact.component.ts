import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Contact } from 'src/app/model/Contact';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  public contactForm = new FormGroup({});
  public nameFormControl = new FormControl("");
  public emailFormControl = new FormControl("");
  public thoughtsFormControl = new FormControl("");
  public comanyFormControl = new FormControl("");


  ngOnInit(): void {
   
  }

}
