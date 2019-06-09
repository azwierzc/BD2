import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {EmployeeDetailsComponent} from './employee-details.component';
import { RoomReservationComponent } from './room-reservation/room-reservation.component';

@NgModule({
  declarations: [
    EmployeeDetailsComponent,
    RoomReservationComponent
  ],
  imports: [
    CommonModule
  ],
  entryComponents: [
    RoomReservationComponent
  ]
})
export class EmployeeDetailsModule { }
