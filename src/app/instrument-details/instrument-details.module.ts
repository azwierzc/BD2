import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {InstrumentDetailsComponent} from './instrument-details.component';
import {EmployeeDetailsModule} from '../employee-details/employee-details.module';

@NgModule({
  declarations: [
    InstrumentDetailsComponent
  ],
  imports: [
    CommonModule,
    EmployeeDetailsModule
  ]
})
export class InstrumentDetailsModule { }
