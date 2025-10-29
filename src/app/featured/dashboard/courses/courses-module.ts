import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing-module';
import { CoursesComponent } from './courses.component';
import { CoursesTableComponent } from './pages/courses-table/courses-table.component';
import { CoursesFormComponent } from './pages/courses-form/courses-form.component';
import { SharedModule } from '../../../shared/shared.module';

@NgModule({
  declarations: [
    CoursesComponent,
    CoursesTableComponent,
    CoursesFormComponent
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    SharedModule
  ]
})
export class CoursesModule { }
