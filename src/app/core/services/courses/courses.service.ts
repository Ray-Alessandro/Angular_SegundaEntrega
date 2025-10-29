import { Injectable } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';
import { Course } from './model/course.model';
import { mockCourses } from './data/mock';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  private courseSubject = new BehaviorSubject<Course[]>([]);
  courses$ = this.courseSubject.asObservable();

  constructor() { 
    this.courseSubject.next(mockCourses);
  }

  getCourseById(id: number) {
    const courses = this.getCourses();
    return of(courses.find(course => course.id === id));
  }

  getCourses(): Course[] {
    return this.courseSubject.getValue();
  }

  addCourse(course: Course): void {
    const currentCourses = this.getCourses();
    const newId = currentCourses.length > 0 ? currentCourses[currentCourses.length - 1].id + 1 : 1;
    this.courseSubject.next([...currentCourses, { ...course, id: newId }]);
  }

  updateCourse(updatedCourse: Course, courseId: number): void {
    const currentCourses = this.getCourses();
    this.courseSubject.next(
      currentCourses.map(course =>
        course.id === courseId ? { ...course, ...updatedCourse } : course
      )
    );
  }

  deleteCourse(courseId: number): void {
    const currentCourses = this.getCourses();
    this.courseSubject.next(
      currentCourses.filter(course => course.id !== courseId)
    );
  }

}
