import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {EmployeeDetailsComponent} from './employee-details.component';
import {InstrumentsComponent} from '../instruments/instruments.component';
import {IntrumentsModule} from '../instruments/intruments.module';
import { RoomReservationComponent } from './room-reservation/room-reservation.component';
import {DlDateTimePickerModule} from 'angular-bootstrap-datetimepicker';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    EmployeeDetailsComponent,
    EmployeeDetailsComponent,
    RoomReservationComponent
  ],
  imports: [
    CommonModule,
    IntrumentsModule,
    CommonModule,
    DlDateTimePickerModule,
    FormsModule
  ],
  entryComponents: [
    RoomReservationComponent
  ]
})
export class EmployeeDetailsModule { }
