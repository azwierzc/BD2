import {Component, EventEmitter, Inject, Input, NgModule, OnInit, Output} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {EmployeeService} from '../services/employee.service';
import {EmployeeModel} from '../employees/models/EmployeeModel';
import {InstrumentModel} from '../instruments/models/InstrumentModel';
import {NgbModal, NgbModule} from '@ng-bootstrap/ng-bootstrap';


import {InstrumentService} from '../services/instrument.service';
import {InstrumentTypeService} from '../services/instrumentType.service';
import {AppComponent} from '../app.component';
import {LoginComponent} from '../login/login.component';
import {NavComponent} from '../nav/nav.component';
import {BrowserModule} from '@angular/platform-browser';
import {EmployeesModule} from '../employees/employees.module';
import {AppRoutingModule} from '../app-routing.module';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {NgSelectModule} from '@ng-select/ng-select';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {EmployeeDetailsModule} from './employee-details.module';
import {IntrumentsModule} from '../instruments/intruments.module';
import {AuthInterceptor} from '../AuthInterceptor';
import {Services} from '@angular/core/src/view';

import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {RoomReservationComponent} from './room-reservation/room-reservation.component';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css'],
  providers: [
    { provide: 'TestService1', useClass: InstrumentService },
    { provide: 'TestService2', useClass: InstrumentService }
  ]
})
export class EmployeeDetailsComponent implements OnInit {
  employeeId: number;
  employee: EmployeeModel;
  employeesList: EmployeeModel[];
 instrumentsList: InstrumentModel[];
 b = false;
  @Input() instrument: InstrumentModel;

  @Output() rentEvent = new EventEmitter<number>();

  constructor(private instrumentTypesService: InstrumentTypeService,
              private route: ActivatedRoute,
              @Inject('TestService1') private service2: EmployeeService,
              @Inject('TestService2') private service1: InstrumentService,
              private service: InstrumentService,
              private modalService: NgbModal,
              private router: Router) { }

  ngOnInit() {
    this.employeeId = Number(this.route.snapshot.params.id);
   // * this.service.fetchEmployee(this.employeeId).then((employee: EmployeeModel) => this.employee = employee);
    this.resolveInstruments();
  }

  resolveInstruments() {
    this.service.fetchInstrumentsList().then((list: InstrumentModel[]) => this.instrumentsList = list);
  }

  onRentClick() {
    if(this.b === false ) {
      this.b = true;
    } else {
      this.b = false;
    }
  }

  onBackClick() {
    this.router.navigate(['employees']);
  }


  onRentInstrumentClick() {
  }

  onDetailsEvent(id: number) {
    this.router.navigate(['Instruments/' + id]);
  }



  onAddRoomReservation() {
    const modelReference = this.modalService.open(RoomReservationComponent, {ariaLabelledBy: 'modal-basic-title'});
    modelReference.componentInstance.employeeId = this.employeeId;
  }
}


