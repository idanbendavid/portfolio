import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from '../components/about/about.component';
import { ContactComponent } from '../components/contact/contact.component';
import { EducationComponent } from '../components/education/education.component';
import { ProjectsComponent } from '../components/projects/projects.component';
import { VacationsComponent } from '../components/projects/vacations/vacations.component';
import { ECommerceComponent } from '../components/projects/e-commerce/e-commerce.component';
import { TrainerComponent } from '../components/projects/trainer/trainer.component';

const routes: Routes = [
  { path: "about", component: AboutComponent },
  { path: "contact", component: ContactComponent },
  { path: "education", component: EducationComponent  },
  {
    path: "projects", children: [
      { path: "", component: ProjectsComponent },
      { path: "vacations", component: VacationsComponent },
      { path: "eCommerce", component: ECommerceComponent },
      { path: "trainer", component: TrainerComponent },
    ]
  },
  {path: "", redirectTo: "about", pathMatch:"full"}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class RoutingModule { }
