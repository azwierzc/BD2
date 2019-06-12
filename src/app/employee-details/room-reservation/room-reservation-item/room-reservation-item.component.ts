import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {RoomReservation} from '../../models/RoomReservation';


@Component({
  selector: 'app-room-reservation-item',
  templateUrl: './room-reservation-item.component.html',
  styleUrls: ['./room-reservation-item.component.css']
})
export class RoomReservationItemComponent implements OnInit {
  @Input() roomReservation: RoomReservation;
  @Input() isRoomView: boolean;

  @Output() deleteEvent = new EventEmitter<number>();

  constructor() {
  }

  ngOnInit() {
  }

  onDeleteClick() {
    this.deleteEvent.emit(this.roomReservation.id);
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
