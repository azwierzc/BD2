import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RoomDetailsComponent} from './room-details.component';
import {IntrumentsModule} from '../instruments/intruments.module';
import { RoomReservationComponent } from '../employee-details/room-reservation/room-reservation.component';
import {DlDateTimePickerModule} from 'angular-bootstrap-datetimepicker';
import {FormsModule} from '@angular/forms';
import { InstrumentReservationComponent } from '../employee-details/instrument-reservation/instrument-reservation.component';

@NgModule({
  declarations: [
    RoomDetailsComponent,
   // RoomReservationComponent,
   // InstrumentReservationComponent
  ],
  imports: [
    CommonModule,
    IntrumentsModule,
    CommonModule,
    DlDateTimePickerModule,
    FormsModule
  ],
  entryComponents: [
    RoomReservationComponent,
    InstrumentReservationComponent

  ]
})
export class RoomDetailsModule { }
