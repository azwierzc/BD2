import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {RoomReservation} from '../employee-details/models/RoomReservation';
import {RoomReservationService} from '../services/room-reservation.service';

@Component({
  selector: 'app-room-details',
  templateUrl: './room-details.component.html',
  styleUrls: ['./room-details.component.css'],
})
export class RoomDetailsComponent implements OnInit {
  roomId: number;
  roomReservationsList: RoomReservation[];

  constructor(
    private route: ActivatedRoute,
    private roomReservationService: RoomReservationService
  ) {
  }

  ngOnInit() {
    this.roomId = Number(this.route.snapshot.params.id);
    this.resolveRoomReservations();
  }

  resolveRoomReservations() {
    this.roomReservationService.fetchRoomReservationsList()
      .then((list: RoomReservation[]) => this.roomReservationsList = list.filter((reservation) => reservation.roomId === this.roomId));
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


