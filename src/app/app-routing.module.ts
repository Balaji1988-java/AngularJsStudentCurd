import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { CreateStudentComponent } from './create-student/create-student.component';
import { StudentListComponent } from './student-list/student-list.component';
import { UpdateStudentComponent } from './update-student/update-student.component';


const routes: Routes = [ { path: '', redirectTo: 'student', pathMatch: 'full' },
{ path: 'students', component: StudentListComponent },
{ path: 'add', component: CreateStudentComponent },
{ path: 'update/:id', component: UpdateStudentComponent },
{ path: 'details/:id', component: StudentDetailsComponent },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
