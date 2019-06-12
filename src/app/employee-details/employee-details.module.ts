import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EmployeeDetailsComponent} from './employee-details.component';
import {IntrumentsModule} from '../instruments/intruments.module';
import {RoomReservationComponent} from './room-reservation/room-reservation.component';
import {DlDateTimePickerModule} from 'angular-bootstrap-datetimepicker';
import {FormsModule} from '@angular/forms';
import {InstrumentReservationComponent} from './instrument-reservation/instrument-reservation.component';
import {RoomReservationItemComponent} from './room-reservation/room-reservation-item/room-reservation-item.component';
import {InstrumentReservationItemComponent} from './instrument-reservation/instrument-reservation-item/instrument-reservation-item.component';
import {ReportComponent} from './report/report.component';
import {ReportItemComponent} from './report/report-item/report-item.component';
import {NgbModule, NgbTabsetModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    EmployeeDetailsComponent,
    EmployeeDetailsComponent,
    RoomReservationComponent,
    InstrumentReservationComponent,
    RoomReservationItemComponent,
    InstrumentReservationItemComponent,
    ReportComponent,
    ReportItemComponent
  ],
  imports: [
    CommonModule,
    IntrumentsModule,
    CommonModule,
    DlDateTimePickerModule,
    FormsModule,
    NgbTabsetModule,
    NgbModule
  ],
  exports: [
    RoomReservationItemComponent,
    InstrumentReservationItemComponent,
    ReportItemComponent
    // RoomReportComponent,
    // InstrumentReportComponent
  ],
  entryComponents: [
    RoomReservationComponent,
    InstrumentReservationComponent,
    ReportComponent,
  ]
})
export class EmployeeDetailsModule {
}
