import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {WardsComponent} from './wards.component';
import {WardItemComponent} from './ward-item/ward-item.component';
import {FormsModule} from '@angular/forms';
import {NgSelectModule} from '@ng-select/ng-select';
import {NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    WardsComponent,
    WardItemComponent
  ],
  exports: [
    WardsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgSelectModule,
    NgbAlertModule
  ]
})
export class WardsModule {
}
