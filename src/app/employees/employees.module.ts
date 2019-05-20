import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {EmployeesComponent} from './employees.component';
import { EmployeeItemComponent } from './employee-item/employee-item.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    EmployeesComponent,
    EmployeeItemComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class EmployeesModule { }
