import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {InstrumentsComponent} from './instruments.component';
import { InstrumentItemComponent } from './instrument-item/instrument-item.component';
import {FormsModule} from '@angular/forms';
import {NgSelectModule} from '@ng-select/ng-select';

@NgModule({
  declarations: [
    InstrumentsComponent,
    InstrumentItemComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgSelectModule
  ]
})
export class IntrumentsModule { }
