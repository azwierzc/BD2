import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import {EmployeesComponent} from './employees/employees.component';
import {LoginComponent} from './login/login.component';
import {EmployeeDetailsComponent} from './employee-details/employee-details.component';
import {InstrumentsComponent} from './instruments/instruments.component';
import {InstrumentDetailsComponent} from './instrument-details/instrument-details.component';

import {RoomsComponent} from './rooms/rooms.component';
import {RoomDetailsComponent} from './room-details/room-details.component';

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
  {
    path: 'instruments/:id',
    component: InstrumentDetailsComponent,
  },

  { path: '', component: HomeComponent },
  { path: 'rooms', component: RoomsComponent },
  {
    path: 'rooms/:id',
    component: RoomDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
