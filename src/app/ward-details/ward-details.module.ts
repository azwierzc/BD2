import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {WardDetailsComponent} from './ward-details.component';
import {IntrumentsModule} from '../instruments/intruments.module';
import {DlDateTimePickerModule} from 'angular-bootstrap-datetimepicker';
import {FormsModule} from '@angular/forms';
import {EmployeeDetailsModule} from '../employee-details/employee-details.module';

@NgModule({
  declarations: [
    WardDetailsComponent
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

  ]
})
export class WardDetailsModule {
}
