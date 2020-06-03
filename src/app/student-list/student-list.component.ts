import { Component, OnInit } from '@angular/core';
import { UpdateStudentComponent } from '../update-student/update-student.component';
import { StudentDetailsComponent } from '../student-details/student-details.component';
import { Observable } from "rxjs";
import { StudentService } from "../student.service";
import { Student } from "../student";
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  students: Observable<Student[]>;
  student:Student[];

  constructor(private studentService: StudentService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.students = this.studentService.getStudentList();
  }

  deleteStudent(id: number) {
    this.studentService.deleteStudent(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  studentDetails(id: number){
    this.router.navigate(['details', id]);
  }

  updateStudent(id: number){
    this.router.navigate(['update', id]);
  }
 
}
