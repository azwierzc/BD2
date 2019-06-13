import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {InstrumentsComponent} from './instruments.component';
import { InstrumentItemComponent } from './instrument-item/instrument-item.component';
import {FormsModule} from '@angular/forms';
import {NgSelectModule} from '@ng-select/ng-select';
import {NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    InstrumentsComponent,
    InstrumentItemComponent
  ],
  exports: [
  InstrumentsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgSelectModule,
    NgbAlertModule
  ]
})
export class IntrumentsModule { }
