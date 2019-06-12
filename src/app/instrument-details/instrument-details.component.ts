import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Route, Router} from '@angular/router';
import {InstrumentReservation} from '../employee-details/models/InstrumentReservation';
import {InstrumentReservationService} from '../services/instrument-reservation.service';
import {EmployeeModel} from '../employees/models/EmployeeModel';
import {InstrumentModel} from '../instruments/models/InstrumentModel';
import {InstrumentService} from '../services/instrument.service';

@Component({
  selector: 'app-instrument-details',
  templateUrl: './instrument-details.component.html',
  styleUrls: ['./instrument-details.component.css'],
})
export class InstrumentDetailsComponent implements OnInit {
  instrumentId: number;
  instrument: InstrumentModel;
  instrumentReservationsList: InstrumentReservation[];

  constructor(
    private route: ActivatedRoute,
    private instrumentReservationService: InstrumentReservationService,
    private instrumentService: InstrumentService,
    private router: Router,
  ) {
  }

  ngOnInit() {
    this.instrumentId = Number(this.route.snapshot.params.id);
    this.instrumentService.fetchInstrument(this.instrumentId).then((instrument: InstrumentModel) => this.instrument = instrument);
    this.resolveInstrumentReservations();
  }

  resolveInstrumentReservations() {
    this.instrumentReservationService.fetchInstrumentReservationsList()
      .then((list: InstrumentReservation[]) => this.instrumentReservationsList = list.filter((reservation) => reservation.instrumentId === this.instrumentId));
  }

  onBackClick() {
    this.router.navigate(['instruments']);
  }

  onDeleteEvent(id: number) {
    this.instrumentReservationService.deleteInstrumentReservation(id).then(() => this.resolveInstrumentReservations());
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


