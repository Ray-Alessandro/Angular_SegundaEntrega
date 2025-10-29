import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentsService } from '../../../../../core/services/students/students.service';
import { studentFormValidator } from './validators/student-form-validator';

@Component({
  selector: 'app-students-form',
  templateUrl: './students-form.component.html',
  styleUrls: ['./students-form.component.css'],
  standalone: false
})
export class StudentsFormComponent {

  studentForm: FormGroup;
  isEditMode: boolean = false;
  studentId: number | null = null;

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private studentService: StudentsService, private router: Router)
  {
    this.studentForm = this.fb.group(studentFormValidator);

    this.route.params.subscribe((params) => {
      this.studentId = Number(params['id']);
      if (this.studentId) {
        this.isEditMode = true;
        this.studentService.getStudentById(this.studentId).subscribe(student => {
          if (student) {
            this.studentForm.patchValue(student);
          }
        });
      }
    });
  }

  onSubmit() {
    if (this.studentForm.invalid) {
      alert('Please fill out the form correctly.');
      return;
    }

    if(this.isEditMode) {
      this.studentService.updateStudent(this.studentForm.value, this.studentId!);
    }
    else {
      this.studentService.addStudent(this.studentForm.value);
    }

    this.router.navigate(['dashboard', 'students']);
  }
}
