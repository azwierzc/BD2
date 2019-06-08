import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {InstrumentModel} from '../models/InstrumentModel';

@Component({
  selector: 'app-instrument-item',
  templateUrl: './instrument-item.component.html',
  styleUrls: ['./instrument-item.component.css']
})
export class InstrumentItemComponent implements OnInit {
  @Input() instrument: InstrumentModel;

  @Output() deleteEvent = new EventEmitter<number>();
  @Output() detailsEvent = new EventEmitter<number>();

  constructor() {
  }

  ngOnInit() {
  }

  onDeleteClick() {
    this.deleteEvent.emit(this.instrument.id);
  }

  onDetailsClick() {
    this.detailsEvent.emit(this.instrument.id);
  }

}
