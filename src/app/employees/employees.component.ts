import {Component, OnInit} from '@angular/core';
import {EmployeeModel} from './models/EmployeeModel';
import {EmployeeService} from '../services/employee.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {EmployeeToAddModel} from './models/EmployeeToAddModel';
import {WardModel} from './models/WardModel';
import {WardService} from '../services/ward.service';
import {Router} from '@angular/router';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  employeeTypeOptions: string[] = ['Doktor', 'Pięlęgniarka'];
  private alert = new Subject<string>();
  private alertS = new Subject<string>();
  staticAlertClosed = false;
  alertMessage: string;
  alertMessageS: string;
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
    setTimeout(() => this.staticAlertClosed = true, 20000);
    this.alert.subscribe((message) => this.alertMessage = message);
    this.alertS.subscribe((messageS) => this.alertMessageS = messageS);
  }

  resolveEmployees() {
    this.service.fetchEmployeesList().then((list: EmployeeModel[]) => this.employeesList = list);
  }

  resolveWards() {
    this.wardsService.fetchWardsList().then((list: WardModel[]) => this.wardsList = list);
  }

  onDeleteEvent(id: number) {
    this.service.deleteEmployee(id).then(() => this.resolveEmployees()).catch((error) => this.viewMessage());
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
    } else {
      this.employeeToAdd.type = 'NURSE';
    }
    this.service.saveEmployee(this.employeeToAdd).then(() => this.resolveEmployees()).then(() => modal.close())
      .catch((error) => this.viewMessageS());
  }

  viewMessage() {
    this.alert.next('Brak uprawnień do usunięcia pracownika.');
  }

  viewMessageS() {
    this.alertS.next('Brak uprawnień do dodania pracownika');
  }
}
