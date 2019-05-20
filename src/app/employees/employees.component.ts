import {Component, OnInit} from '@angular/core';
import {EmployeeModel} from './models/EmployeeModel';
import {EmployeeService} from './services/employee.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {EmployeeToAddModel} from './models/EmployeeToAddModel';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  employeesList: EmployeeModel[];
  employeeToAdd: EmployeeToAddModel;

  constructor(private service: EmployeeService, private modalService: NgbModal) {
  }

  ngOnInit() {
    this.employeeToAdd = new EmployeeToAddModel();
    this.employeeToAdd.wardId = 1; // TODO: Remove this statically selected ward
    this.resolveEmployees();
  }

  resolveEmployees() {
    this.service.fetchEmployeesList().then((list: EmployeeModel[]) => this.employeesList = list);
  }

  onDeleteEvent(id: number) {
    this.service.deleteEmployee(id).then(() => this.resolveEmployees());
  }

  onAddEmployeeClick(modal) {
    this.modalService.open(modal, {ariaLabelledBy: 'modal-basic-title'});
  }

  saveReport(modal) {
    this.service.saveEmployee(this.employeeToAdd).then(() => this.resolveEmployees());
    modal.close();
  }

}
