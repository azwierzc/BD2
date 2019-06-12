import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {EmployeesComponent} from './employees.component';
import { EmployeeItemComponent } from './employee-item/employee-item.component';
import {FormsModule} from '@angular/forms';
import {NgSelectModule} from '@ng-select/ng-select';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    EmployeesComponent,
    EmployeeItemComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgSelectModule,
    NgbModule
  ]
})
export class EmployeesModule { }
