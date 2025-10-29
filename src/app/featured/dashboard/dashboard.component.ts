import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  standalone: false
})
export class DashboardComponent {

  constructor() { }

  listItems = [
    {
      name: 'Home',
      icon: 'home',
      route: ''
    },
    {
      name: 'Courses',
      icon: 'book',
      route: 'courses'
    },
    {
      name: 'Students',
      icon: 'group',
      route: 'students'
    }
  ];
}
