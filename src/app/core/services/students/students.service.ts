import { Injectable } from '@angular/core';
import { Student } from './model/student.model';
import { BehaviorSubject, of } from 'rxjs';
import { mockStudents } from './data/mock';

@Injectable({
  providedIn: 'root',
})
export class StudentsService {
  private studentSubject = new BehaviorSubject<Student[]>([]);
  students$ = this.studentSubject.asObservable();

  constructor() {
    this.studentSubject.next(mockStudents);
  }

  getStudentById(id: number) {
    const students = this.getStudents();
    return of(students.find(student => student.id === id));
  }

  getStudents(): Student[] {
    return this.studentSubject.getValue();
  }

  addStudent(student: Student): void {
    const currentStudents = this.getStudents();
    const newId = currentStudents.length > 0 ? currentStudents[currentStudents.length - 1].id + 1 : 1;
    this.studentSubject.next([...currentStudents, { ...student, id: newId }]);
  }

  updateStudent(updatedStudent: Student, studentId: number): void {
    const currentStudents = this.getStudents();
    this.studentSubject.next(
      currentStudents.map(student =>
        student.id === studentId ? { ...student, ...updatedStudent } : student
      )
    );
  }

  deleteStudent(studentId: number): void {
    const currentStudents = this.getStudents();
    this.studentSubject.next(
      currentStudents.filter(student => student.id !== studentId)
    );
  }
}
