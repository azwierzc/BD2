import {Component, OnInit} from '@angular/core';
import {EmployeeModel} from './models/EmployeeModel';
import {EmployeeService} from '../services/employee.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {EmployeeToAddModel} from './models/EmployeeToAddModel';
import {WardModel} from './models/WardModel';
import {WardService} from '../services/ward.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  employeeTypeOptions: string[] = ['Doktor', 'Pięlęgniarka'];

  employeesList: EmployeeModel[];
  employeeToAdd: EmployeeToAddModel;

  wardsList: WardModel[];

  constructor(private service: EmployeeService,
              private wardsService: WardService,
              private modalService: NgbModal,
              private router: Router
  ) {
  }

  ngOnInit() {
    this.employeeToAdd = new EmployeeToAddModel();
    this.resolveEmployees();
    this.resolveWards();
  }

  resolveEmployees() {
    this.service.fetchEmployeesList().then((list: EmployeeModel[]) => this.employeesList = list);
  }

  resolveWards() {
    this.wardsService.fetchWardsList().then((list: WardModel[]) => this.wardsList = list);
  }

  onDeleteEvent(id: number) {
    this.service.deleteEmployee(id).then(() => this.resolveEmployees());
  }

  onDetailsEvent(id: number) {
    this.router.navigate(['employees/' + id]);
  }

  onAddEmployeeClick(modal) {
    this.modalService.open(modal, {ariaLabelledBy: 'modal-basic-title'});
  }

  saveReport(modal) {

    if (this.employeeToAdd.type === 'Doktor') {
      this.employeeToAdd.type = 'DOCTOR';
    } else{
      this.employeeToAdd.type = 'NURSE';
    }

    this.service.saveEmployee(this.employeeToAdd).then(() => this.resolveEmployees());
    modal.close();
  }

}
