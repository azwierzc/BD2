import { Component, OnInit } from '@angular/core';
import {EmployeeModel} from './models/EmployeeModel';
import {EmployeeService} from './services/employee.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  employeesList: EmployeeModel[];

  constructor(private service: EmployeeService) { }

  ngOnInit() {
    this.service.fetchEmployeesList().then((list: EmployeeModel[]) => this.employeesList = list);
  }

}
