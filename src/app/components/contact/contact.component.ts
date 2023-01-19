import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(public contactService: ContactService) { }


  public contactForm = new FormGroup({
    name: new FormControl<string | null>("", [Validators.required]),
    email: new FormControl<string | null>("", Validators.compose([Validators.required, Validators.email])),
    subject: new FormControl<string | null>("", [Validators.required]),
    thoughts: new FormControl<string | null>("", [Validators.required])
  });

  contactFormSubmit(): void {
    console.log(this.contactForm.value)

    this.contactService.PostMessage(this.contactForm.value).subscribe(response => {
      location.href = 'https://mailthis.to/confirm';
      console.log(response)
    }, error => {
      console.warn(error.responseText)
      console.log({ error })
    })

    this.contactForm.reset();
  }

  ngOnInit(): void {
  }

} 
