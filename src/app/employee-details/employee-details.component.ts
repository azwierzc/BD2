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
import {InstrumentReservationService} from '../services/instrument-reservation.service';
import {InstrumentReservation} from './models/InstrumentReservation';
import {RoomReportModel} from './models/RoomReportModel';
import {RoomReportService} from '../services/room-report.service';
import {InstrumentReportService} from '../services/instrument-report.service';
import {InstrumentReportModel} from './models/InstrumentReportModel';

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
  roomReport: RoomReportModel;
  instrumentReport: InstrumentReportModel;
  roomReportsList: RoomReportModel[];
  instrumentReportsList: InstrumentReportModel[];
  roomReservationsList: RoomReservation[];
  instrumentReservationsList: InstrumentReservation[];
  isInstrumentReservationOpen = false;
  isRoomReservationOpen = false;


  @Input() instrument: InstrumentModel;

  @Output() rentEvent = new EventEmitter<number>();

  constructor(private instrumentTypesService: InstrumentTypeService,
              private route: ActivatedRoute,
              private employeeService: EmployeeService,
              private service: InstrumentService,
              private roomService: RoomService,
            //  private roomReportService: RoomReportService,
            //  private instrumentReportService: InstrumentReportService,
              private roomReservationService: RoomReservationService,
              private instrumentReservationService: InstrumentReservationService,
              private modalService: NgbModal,
              private router: Router) {
  }

  ngOnInit() {
    this.employeeId = Number(this.route.snapshot.params.id);
    this.employeeService.fetchEmployee(this.employeeId).then((employee: EmployeeModel) => this.employee = employee);
    this.resolveInstruments();
    this.resolveRooms();
    this.resolveRoomReservations();
    this.resolveInstrumentReservations();
   // this.resolveRoomReports();
  //  this.resolveInstrumentReports();

 //   this.roomReport = new RoomReportModel();
 //  this.instrumentReport = new InstrumentReportModel();
  }

  resolveInstruments() {
    this.service.fetchInstrumentsList().then((list: InstrumentModel[]) => this.instrumentsList = list);
  }

  resolveRooms() {
    this.roomService.fetchRoomsList().then((list: RoomModel[]) => this.roomsList = list);
  }
/*
  resolveRoomReports() {
    this.roomReportService.fetchRoomReportsList().then((list: RoomReportModel[]) => this.roomReportsList = list);
  }

  resolveInstrumentReports() {
    this.instrumentReportService.fetchInstrumentReportsList().then((list: InstrumentReportModel[]) => this.instrumentReportsList = list);
  }
*/
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

  resolveInstrumentReservations() {
    this.instrumentReservationService.fetchInstrumentReservationsList()
      .then((list: InstrumentReservation[]) => this.instrumentReservationsList = list.filter((reservation) => reservation.employeeId === this.employeeId));
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

/*
  saveRoomReport(modal) {
    this.roomReportService.saveRoomReport(this.roomReport).then(() => this.resolveRoomReports());
    modal.close();
  }

  saveInstrumentReport(modal) {
    this.instrumentReportService.saveInstrumentReport(this.instrumentReport).then(() => this.resolveInstrumentReports());
    modal.close();
  }
  */
  
  public getDate(date: Date): string {
    const newDate = new Date(date);
    return newDate.toLocaleDateString();
  }

  public getTime(date: Date): string {
    const newDate = new Date(date);
    return newDate.toLocaleTimeString();
  }
}

