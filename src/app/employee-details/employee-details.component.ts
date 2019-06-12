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
import {InstrumentReportModel} from './models/InstrumentReportModel';
import {ReportService} from '../services/report.service';
import {ReportModel} from './models/ReportModel';
import {ReportComponent} from './report/report.component';

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
  report: ReportModel;
  reportsList: ReportModel[];
  reportsListToEmployee: ReportModel[];
  roomReport: RoomReportModel;
  instrumentReport: InstrumentReportModel;
  roomReportsList: RoomReportModel[];
  instrumentReportsList: InstrumentReportModel[];
  roomReservationsList: RoomReservation[];
  instrumentReservationsList: InstrumentReservation[];
  isInstrumentViewOpen = false;
  isRoomViewOpen = false;


  @Input() instrument: InstrumentModel;

  @Output() rentEvent = new EventEmitter<number>();

  constructor(private instrumentTypesService: InstrumentTypeService,
              private route: ActivatedRoute,
              private employeeService: EmployeeService,
              private service: InstrumentService,
              private roomService: RoomService,
              private reportService: ReportService,
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
    // this.resolveReports();
    this.resolveReportsToEmployee();
    this.report = new ReportModel();
    // this.resolveRoomReports();
    //  this.resolveInstrumentReports();

    this.report = new ReportModel();
    //  this.instrumentReport = new InstrumentReportModel();
  }

  resolveInstruments() {
    this.service.fetchInstrumentsList().then((list: InstrumentModel[]) => this.instrumentsList = list);
  }

  resolveRooms() {
    this.roomService.fetchRoomsList().then((list: RoomModel[]) => this.roomsList = list);
  }

  resolveReports() {
    this.reportService.fetchReportsList().then((list: ReportModel[]) => this.reportsList = list.filter((report) => report.employeeId === this.employeeId));
  }


  resolveReportsToEmployee() {
    this.reportService.fetchReportsListToEmployee(this.employeeId)
      .then((list: ReportModel[]) => this.reportsListToEmployee = list)
      .then(() => console.log(this.reportsListToEmployee));
  }


  onInstrumentOptionClick() {
    if (this.isInstrumentViewOpen === false) {
      this.isInstrumentViewOpen = true;
      this.isRoomViewOpen = false;
    } else {
      this.isInstrumentViewOpen = false;
    }
  }

  onRoomOptionClick() {
    if (this.isRoomViewOpen === false) {
      this.isRoomViewOpen = true;
      this.isInstrumentViewOpen = false;
    } else {
      this.isRoomViewOpen = false;
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


  onAddReportClick() {
    const modelReference = this.modalService.open(ReportComponent, {ariaLabelledBy: 'modal-basic-title'});
    modelReference.componentInstance.employeeId = this.employeeId;
  }


  onDeleteReportEvent(id: number) {
    this.reportService.deleteReport(id).then(() => this.resolveReports());
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

