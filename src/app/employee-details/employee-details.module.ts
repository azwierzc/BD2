import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {EmployeeDetailsComponent} from './employee-details.component';
import { RoomReservationComponent } from './room-reservation/room-reservation.component';
import {DlDateTimePickerModule} from 'angular-bootstrap-datetimepicker';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    EmployeeDetailsComponent,
    RoomReservationComponent
  ],
  imports: [
    CommonModule,
    DlDateTimePickerModule,
    FormsModule
  ],
  entryComponents: [
    RoomReservationComponent
  ]
})
export class EmployeeDetailsModule { }
