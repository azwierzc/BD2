import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {InstrumentReservation} from '../../models/InstrumentReservation';


@Component({
  selector: 'app-instrument-reservation-item',
  templateUrl: './instrument-reservation-item.component.html',
  styleUrls: ['./instrument-reservation-item.component.css']
})
export class InstrumentReservationItemComponent implements OnInit {
  @Input() instrumentReservation: InstrumentReservation;
  @Input() showEmployee: boolean;

  @Output() deleteEvent = new EventEmitter<number>();

  constructor() {
  }

  ngOnInit() {
  }

  onDeleteClick() {
    this.deleteEvent.emit(this.instrumentReservation.id);
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
