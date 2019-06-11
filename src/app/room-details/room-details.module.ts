import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RoomDetailsComponent} from './room-details.component';
import {IntrumentsModule} from '../instruments/intruments.module';
import {RoomReservationComponent} from '../employee-details/room-reservation/room-reservation.component';
import {DlDateTimePickerModule} from 'angular-bootstrap-datetimepicker';
import {FormsModule} from '@angular/forms';
import {InstrumentReservationComponent} from '../employee-details/instrument-reservation/instrument-reservation.component';
import {EmployeeDetailsModule} from '../employee-details/employee-details.module';

@NgModule({
  declarations: [
    RoomDetailsComponent
  ],
  imports: [
    CommonModule,
    IntrumentsModule,
    CommonModule,
    DlDateTimePickerModule,
    FormsModule,
    EmployeeDetailsModule
  ],
  entryComponents: [
    RoomReservationComponent,
    InstrumentReservationComponent
  ]
})
export class RoomDetailsModule {
}
