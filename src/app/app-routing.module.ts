import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EmployeesComponent} from './employees/employees.component';
import {LoginComponent} from './login/login.component';
import {EmployeeDetailsComponent} from './employee-details/employee-details.component';

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
    path: '',
    pathMatch: 'prefix',
    redirectTo: 'employees',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
