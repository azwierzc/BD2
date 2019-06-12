import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NgSelectModule} from '@ng-select/ng-select';
import {AppComponent} from './app.component';
import {EmployeesModule} from './employees/employees.module';
import {AppRoutingModule} from './app-routing.module';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {LoginComponent} from './login/login.component';
import {AuthInterceptor} from './AuthInterceptor';
import {EmployeeDetailsModule} from './employee-details/employee-details.module';
import {IntrumentsModule} from './instruments/intruments.module';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { DlDateTimeDateModule, DlDateTimePickerModule } from 'angular-bootstrap-datetimepicker';
import {InstrumentDetailsModule} from './instrument-details/instrument-details.module';
import {RoomsModule} from './rooms/rooms.module';
import {RoomDetailsModule} from './room-details/room-details.module';
import { ReportsComponent } from './reports/reports.component';
import { WardsComponent } from './wards/wards.component';
import { WardItemComponent } from './wards/ward-item/ward-item.component';
import {WardsModule} from './wards/wards.module';
import { WardDetailsComponent } from './ward-details/ward-details.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavComponent,
    HomeComponent,
    ReportsComponent,
    WardDetailsComponent,
    // WardsComponent,
   // WardItemComponent,
  ],
  imports: [
    BrowserModule,
    EmployeesModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule,
    EmployeeDetailsModule,
    IntrumentsModule,
    HttpClientModule,
    ReactiveFormsModule,
    IntrumentsModule,
    RoomsModule,
    RoomDetailsModule,
    WardsModule,
    InstrumentDetailsModule,
    DlDateTimeDateModule,  // <--- Determines the data type of the model
    DlDateTimePickerModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
