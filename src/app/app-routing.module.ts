import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import {EmployeesComponent} from './employees/employees.component';
import {LoginComponent} from './login/login.component';
import {EmployeeDetailsComponent} from './employee-details/employee-details.component';

import {InstrumentsComponent} from './instruments/instruments.component';


const routes: Routes = [
  {
    path: 'employees',
    component: EmployeesComponent,
  },
  {
    path: 'employees/:id',
    component: EmployeeDetailsComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'instruments',
    component: InstrumentsComponent
  },
  { path: '', component: HomeComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
