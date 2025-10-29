import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentsRoutingModule } from './students-routing-module';
import { StudentsComponent } from './students.component';
import { StudentsFormComponent } from './pages/students-form/students-form.component';
import { SharedModule } from '../../../shared/shared.module';
import { StudentsTableComponent } from './pages/students-table/students-table.component';

@NgModule({
  declarations: [
    StudentsComponent,
    StudentsFormComponent,
    StudentsTableComponent
  ],
  imports: [
    CommonModule,
    StudentsRoutingModule,
    SharedModule
  ]
})
export class StudentsModule { }