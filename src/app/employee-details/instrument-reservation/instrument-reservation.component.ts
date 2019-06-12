import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {InstrumentReservation} from '../models/InstrumentReservation';
import {ActivatedRoute} from '@angular/router';
import {InstrumentReservationService} from '../../services/instrument-reservation.service';

@Component({
  selector: 'app-instrument-reservation',
  templateUrl: './instrument-reservation.component.html',
  styleUrls: ['./instrument-reservation.component.css']
})
export class InstrumentReservationComponent implements OnInit {
  instrumentReservation: InstrumentReservation;

  @Input() employeeId: number;
  @Input() employeeName: string;
  @Input() employeeSurname: string;
  @Input() instrumentId: number;


  constructor(
    private activeModal: NgbActiveModal,
    private route: ActivatedRoute,
    private service: InstrumentReservationService
  ) {
  }

  ngOnInit() {
    this.instrumentReservation = new InstrumentReservation();
    this.instrumentReservation.employeeId = this.employeeId;
    this.instrumentReservation.employeeName = this.employeeName;
    this.instrumentReservation.employeeSurname = this.employeeSurname;
    this.instrumentReservation.instrumentId = this.instrumentId;
  }

  onSave() {
    this.service.saveInstrumentReservation(this.instrumentReservation);
    this.activeModal.close();
  }

  getDate(date: Date): string {
    return date.toLocaleDateString();
  }

  getTime(date: Date): string {
    return date.toLocaleTimeString();
  }
}
