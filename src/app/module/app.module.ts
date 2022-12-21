import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { RoutingModule } from './routing.module';
import { HttpClientModule } from "@angular/common/http";
import { HeaderComponent } from '../components/header/header.component';
import { HomeComponent } from '../components/home/home.component';
import { AboutComponent } from '../components/about/about.component';
import { EducationComponent } from '../components/education/education.component';
import { ProjectsComponent } from '../components/projects/projects.component';
import { ContactComponent } from '../components/contact/contact.component';
import { ECommerceComponent } from '../components/projects/e-commerce/e-commerce.component';
import { VacationsComponent } from '../components/projects/vacations/vacations.component';
import { TrainerComponent } from '../components/projects/trainer/trainer.component';
import { SkillsComponent } from '../components/education/skills/skills.component';
import { SharedDataService } from '../services/shared-data.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbDropdownModule, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    HeaderComponent,
    AboutComponent,
    EducationComponent,
    ProjectsComponent,
    ContactComponent,
    ECommerceComponent,
    VacationsComponent,
    TrainerComponent,
    SkillsComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    RoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgbModule,
    NgbDropdownModule,
    NgbNavModule
  ],
  providers: [SharedDataService],
  bootstrap: [HomeComponent]
})
export class AppModule { }
