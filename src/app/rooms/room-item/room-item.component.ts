import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {RoomModel} from '../models/RoomModel';

@Component({
  selector: 'app-room-item',
  templateUrl: './room-item.component.html',
  styleUrls: ['./room-item.component.css']
})
export class RoomItemComponent implements OnInit {
  @Input() room: RoomModel;

  @Output() deleteEvent = new EventEmitter<number>();
  @Output() detailsEvent = new EventEmitter<number>();

  constructor() {
  }

  ngOnInit() {

    if (this.room.type === 'SURGERY') {
      this.room.type = 'operacyjna';
    } else if (this.room.type === 'PERIOPERATIVE') {
      this.room.type = 'okołozabiegowa';
    } else if (this.room.type === 'PATIENT') {
      this.room.type = 'chorych';
    } else if (this.room.type === 'MRI') {
      this.room.type = 'MRI';
    } else if (this.room.type === 'RTG') {
      this.room.type = 'RTG';
    }
  }

  onDeleteClick() {
    this.deleteEvent.emit(this.room.id);
  }

  onDetailsClick() {
    this.detailsEvent.emit(this.room.id);
  }
}
