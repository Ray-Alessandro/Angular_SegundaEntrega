import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Course, courseColumns } from '../../../../../core/services/courses/model/course.model';
import { MatTableDataSource } from '@angular/material/table';
import { CoursesService } from '../../../../../core/services/courses/courses.service';

@Component({
  selector: 'app-courses-table',
  templateUrl: './courses-table.component.html',
  styleUrls: ['./courses-table.component.css'],
  standalone: false
})
export class CoursesTableComponent {

  displayedColumns: string[] = courseColumns;
  dataSource = new MatTableDataSource<Course>([]);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private courseService: CoursesService) { 
    this.courseService.courses$.subscribe(courses => {
      this.dataSource.data = courses;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  
  onDeleteCourse(courseId: number): void {
    const firmDelete = confirm('Are you sure you want to delete this course?');
    if (!firmDelete) {
      return;
    }
    
    this.courseService.deleteCourse(courseId);
  }
}
