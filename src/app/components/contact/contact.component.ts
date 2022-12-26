import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }
  contactForm = new FormGroup({
    name: new FormControl<string |null>("", [Validators.required]),
    email: new FormControl<string| null>("", Validators.compose([Validators.required, Validators.email])),
    subject: new FormControl<string| null>("", [Validators.required]),
    thoughts: new FormControl<string| null>("", [Validators.required])
  });


  contactFormSubmit() {
    console.log(this.contactForm.value)
    // this.contactForm.reset()
  }

  ngOnInit(): void {
  }

}
