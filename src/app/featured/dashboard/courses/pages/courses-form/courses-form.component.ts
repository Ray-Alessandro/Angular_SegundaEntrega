import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CoursesService } from '../../../../../core/services/courses/courses.service';
import { courseFormValidator } from './validators/course-form-validator';

@Component({
  selector: 'app-courses-form',
  templateUrl: './courses-form.component.html',
  styleUrls: ['./courses-form.component.css'],
  standalone: false
})
export class CoursesFormComponent {

  courseForm: FormGroup;
  isEditMode: boolean = false;
  courseId: number | null = null;

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private courseService: CoursesService, private router: Router){
    this.courseForm = this.fb.group(courseFormValidator);

    this.route.params.subscribe((params) => {
      this.courseId = Number(params['id']);
      if (this.courseId) {
        this.isEditMode = true;
        this.courseService.getCourseById(this.courseId).subscribe(course => {
          if (course) {
            this.courseForm.patchValue(course);
          }
        });
      }
    });
  }

  onSubmit() {
    if (this.courseForm.invalid) {
      alert('Please fill out the form correctly.');
      return;
    }
    
    if(this.isEditMode) {
      this.courseService.updateCourse(this.courseForm.value, this.courseId!);
    }
    else {
      this.courseService.addCourse(this.courseForm.value);
    }

    this.router.navigate(['dashboard', 'courses']);
  }
}
