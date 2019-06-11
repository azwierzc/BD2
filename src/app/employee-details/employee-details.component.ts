import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {EmployeeService} from '../services/employee.service';
import {EmployeeModel} from '../employees/models/EmployeeModel';
import {InstrumentModel} from '../instruments/models/InstrumentModel';
import {InstrumentService} from '../services/instrument.service';
import {InstrumentTypeService} from '../services/instrumentType.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {RoomReservationComponent} from './room-reservation/room-reservation.component';
import {InstrumentReservationComponent} from './instrument-reservation/instrument-reservation.component';
import {RoomModel} from './models/RoomModel';
import {RoomService} from '../services/room.service';
import {RoomReservation} from './models/RoomReservation';
import {RoomReservationService} from '../services/room-reservation.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css'],
})
export class EmployeeDetailsComponent implements OnInit {
  employeeId: number;
  employee: EmployeeModel;
  instrumentsList: InstrumentModel[];
  roomsList: RoomModel[];
  roomReservationsList: RoomReservation[];
  isInstrumentReservationOpen = false;
  isRoomReservationOpen = false;

  @Input() instrument: InstrumentModel;

  @Output() rentEvent = new EventEmitter<number>();

  constructor(private instrumentTypesService: InstrumentTypeService,
              private route: ActivatedRoute,
              private employeeService: EmployeeService,
              private service: InstrumentService,
              private roomService: RoomService,
              private roomReservationService: RoomReservationService,
              private modalService: NgbModal,
              private router: Router) {
  }

  ngOnInit() {
    this.employeeId = Number(this.route.snapshot.params.id);
    this.employeeService.fetchEmployee(this.employeeId).then((employee: EmployeeModel) => this.employee = employee);
    this.resolveInstruments();
    this.resolveRooms();
    this.resolveRoomReservations();
  }

  resolveInstruments() {
    this.service.fetchInstrumentsList().then((list: InstrumentModel[]) => this.instrumentsList = list);
  }

  resolveRooms() {
    this.roomService.fetchRoomsList().then((list: RoomModel[]) => this.roomsList = list);
  }

  onInstrumentOptionClick() {
    if (this.isInstrumentReservationOpen === false) {
      this.isInstrumentReservationOpen = true;
      this.isRoomReservationOpen = false;
    } else {
      this.isInstrumentReservationOpen = false;
    }
  }

  onRoomOptionClick() {
    if (this.isRoomReservationOpen === false) {
      this.isRoomReservationOpen = true;
      this.isInstrumentReservationOpen = false;
    } else {
      this.isRoomReservationOpen = false;
    }
  }

  onBackClick() {
    this.router.navigate(['employees']);
  }

  resolveRoomReservations() {
    this.roomReservationService.fetchRoomReservationsList()
      .then((list: RoomReservation[]) => this.roomReservationsList = list.filter((reservation) => reservation.employeeId === this.employeeId));
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

  public getDate(date: Date): string {
    const newDate = new Date(date);
    return newDate.toLocaleDateString();
  }

  public getTime(date: Date): string {
    const newDate = new Date(date);
    return newDate.toLocaleTimeString();
  }
}

