import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { StudentComponent } from './student/student.component';
import { StuFormComponent } from './stu-form/stu-form.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'about', component: AboutComponent },
  { path: "student", component: StudentComponent },
  { path: "stuform", component: StuFormComponent },
  { path: "stuform/student", redirectTo: 'student' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
