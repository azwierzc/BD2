import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {EmployeeService} from '../services/employee.service';
import {EmployeeModel} from '../employees/models/EmployeeModel';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {RoomReservationComponent} from './room-reservation/room-reservation.component';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  employeeId: number;
  employee: EmployeeModel;

  constructor(private route: ActivatedRoute, private service: EmployeeService, private modalService: NgbModal) { }

  ngOnInit() {
    this.employeeId = Number(this.route.snapshot.params.id);
    this.service.fetchEmployee(this.employeeId).then((employee: EmployeeModel) => this.employee = employee);
  }

  onAddRoomReservation() {
    const modelReference = this.modalService.open(RoomReservationComponent, {ariaLabelledBy: 'modal-basic-title'});
    modelReference.componentInstance.employeeId = this.employeeId;
  }
}
