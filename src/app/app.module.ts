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

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    EmployeesModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule
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
