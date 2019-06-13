import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {InstrumentReservation} from '../models/InstrumentReservation';
import {ActivatedRoute, Router} from '@angular/router';
import {InstrumentReservationService} from '../../services/instrument-reservation.service';
import {debounceTime} from 'rxjs/operators';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-instrument-reservation',
  templateUrl: './instrument-reservation.component.html',
  styleUrls: ['./instrument-reservation.component.css']
})
export class InstrumentReservationComponent implements OnInit {
  instrumentReservation: InstrumentReservation;
  private alert = new Subject<string>();
  staticAlertClosed = false;
  alertMessage: string;
  @Input() employeeId: number;
  @Input() employeeName: string;
  @Input() employeeSurname: string;
  @Input() instrumentId: number;

  constructor(
    private activeModal: NgbActiveModal,
    private route: ActivatedRoute,
    private service: InstrumentReservationService,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.instrumentReservation = new InstrumentReservation();
    this.instrumentReservation.employeeId = this.employeeId;
    this.instrumentReservation.employeeName = this.employeeName;
    this.instrumentReservation.employeeSurname = this.employeeSurname;
    this.instrumentReservation.instrumentId = this.instrumentId;
    setTimeout(() => this.staticAlertClosed = true, 20000);
    this.alert.subscribe((message) => this.alertMessage = message);
    this.alert.pipe(debounceTime(5000)).subscribe(() => this.alertMessage = null);
  }

  onSave() {
    this.service.saveInstrumentReservation(this.instrumentReservation).then(() => this.router.navigate(['/employees']))
      .then( () => this.activeModal.close()).catch(() => this.viewMessage());
  }

  getDate(date: Date): string {
    return date.toLocaleDateString();
  }

  getTime(date: Date): string {
    return date.toLocaleTimeString();
  }

  viewMessage() {
    this.alert.next('Nieprawidłowy czas wypożyczenia.');
  }
}
