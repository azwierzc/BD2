import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {EmployeeDetailsComponent} from './employee-details.component';
import {IntrumentsModule} from '../instruments/intruments.module';
import { RoomReservationComponent } from './room-reservation/room-reservation.component';
import {DlDateTimePickerModule} from 'angular-bootstrap-datetimepicker';
import {FormsModule} from '@angular/forms';
import { InstrumentReservationComponent } from './instrument-reservation/instrument-reservation.component';
import { RoomReservationItemComponent } from './room-reservation/room-reservation-item/room-reservation-item.component';
import { InstrumentReservationItemComponent } from './instrument-reservation/instrument-reservation-item/instrument-reservation-item.component';
import {RoomReportComponent} from './room-report/room-report.component';
import { InstrumentReportComponent } from './instrument-report/instrument-report.component';

@NgModule({
  declarations: [
    EmployeeDetailsComponent,
    EmployeeDetailsComponent,
    RoomReservationComponent,
    RoomReportComponent,
    InstrumentReportComponent,
    InstrumentReservationComponent,
    RoomReservationItemComponent,
    InstrumentReservationItemComponent,
    RoomReportComponent,
    InstrumentReportComponent
  ],
  imports: [
    CommonModule,
    IntrumentsModule,
    CommonModule,
    DlDateTimePickerModule,
    FormsModule
  ],
  exports: [
    RoomReservationItemComponent,
    InstrumentReservationItemComponent,
    // RoomReportComponent,
    // InstrumentReportComponent
  ],
  entryComponents: [
    RoomReservationComponent,
    InstrumentReservationComponent,
    RoomReportComponent,
    InstrumentReportComponent

  ]
})
export class EmployeeDetailsModule { }
