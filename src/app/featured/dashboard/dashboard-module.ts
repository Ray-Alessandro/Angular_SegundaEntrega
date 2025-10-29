import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing-module';
import { SharedModule } from '../../shared/shared.module';
import { DashboardComponent } from './dashboard.component';
import { CoursesModule } from './courses/courses-module';
import { StudentsModule } from './students/students-module';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    DashboardComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    DashboardRoutingModule,
    StudentsModule,
    CoursesModule
  ]
})
export class DashboardModule { }
