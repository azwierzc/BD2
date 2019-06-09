import {Component, EventEmitter, Inject, Input, OnInit, Output} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {EmployeeService} from '../services/employee.service';
import {EmployeeModel} from '../employees/models/EmployeeModel';
import {InstrumentModel} from '../instruments/models/InstrumentModel';

import {InstrumentService} from '../services/instrument.service';
import {InstrumentTypeService} from '../services/instrumentType.service';

import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {RoomReservationComponent} from './room-reservation/room-reservation.component';
import {InstrumentReservationComponent} from './instrument-reservation/instrument-reservation.component';
import {Room} from './models/Room';
import {RoomService} from '../services/room.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css'],
})
export class EmployeeDetailsComponent implements OnInit {
  employeeId: number;
  employee: EmployeeModel;
  instrumentsList: InstrumentModel[];
  roomsList: Room[];
  isInstrumentReservationOpen = false;
  isRoomReservationOpen = false;
  @Input() instrument: InstrumentModel;

  @Output() rentEvent = new EventEmitter<number>();

  constructor(private instrumentTypesService: InstrumentTypeService,
              private route: ActivatedRoute,
              private employeeService: EmployeeService,
              private service: InstrumentService,
              private roomService: RoomService,
              private modalService: NgbModal,
              private router: Router) {
  }

  ngOnInit() {
    this.employeeId = Number(this.route.snapshot.params.id);
    this.employeeService.fetchEmployee(this.employeeId).then((employee: EmployeeModel) => this.employee = employee);
    this.resolveInstruments();
    this.resolveRooms();
  }

  resolveInstruments() {
    this.service.fetchInstrumentsList().then((list: InstrumentModel[]) => this.instrumentsList = list);
  }

  resolveRooms() {
    this.roomService.fetchRoomsList().then((list: Room[]) => this.roomsList = list);
  }

  onInstrumentOptionClick() {
    if (this.isInstrumentReservationOpen === false) {
      this.isInstrumentReservationOpen = true;
    } else {
      this.isInstrumentReservationOpen = false;
    }
  }

  onRoomOptionClick() {
    if (this.isRoomReservationOpen === false) {
      this.isRoomReservationOpen = true;
    } else {
      this.isRoomReservationOpen = false;
    }
  }


  onBackClick() {
    this.router.navigate(['employees']);
  }


  onRentInstrumentClick(id: number) {
    const modelReference = this.modalService.open(InstrumentReservationComponent, {ariaLabelledBy: 'modal-basic-title'});
    modelReference.componentInstance.employeeId = this.employeeId;
    modelReference.componentInstance.instrumentId = id;
  }

  onRentRoomClick(id: number) {
    const modelReference = this.modalService.open(RoomReservationComponent, {ariaLabelledBy: 'modal-basic-title'});
    modelReference.componentInstance.employeeId = this.employeeId;
    modelReference.componentInstance.roomId = id;
  }

}


