import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {RoomReservation} from '../employee-details/models/RoomReservation';
import {RoomReservationService} from '../services/room-reservation.service';
import {RoomModel} from '../rooms/models/RoomModel';
import {RoomService} from '../services/room.service';
import {InstrumentModel} from '../instruments/models/InstrumentModel';

@Component({
  selector: 'app-room-details',
  templateUrl: './room-details.component.html',
  styleUrls: ['./room-details.component.css'],
})
export class RoomDetailsComponent implements OnInit {
  roomId: number;
  room: RoomModel;
  roomReservationsList: RoomReservation[];

  constructor(
    private route: ActivatedRoute,
    private service: RoomService,
    private roomReservationService: RoomReservationService,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.roomId = Number(this.route.snapshot.params.id);
    this.service.fetchRoom(this.roomId).then((room: RoomModel) => this.room = room);
    this.resolveRoomReservations();
  }

  onBackClick() {
    this.router.navigate(['rooms']);
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


