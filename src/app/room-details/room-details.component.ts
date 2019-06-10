import {Component, EventEmitter, Inject, Input, OnInit, Output} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {RoomService} from '../services/room.service';
import {RoomModel} from '../rooms/models/RoomModel';
import {InstrumentModel} from '../instruments/models/InstrumentModel';
import {InstrumentService} from '../services/instrument.service';
import {InstrumentTypeService} from '../services/instrumentType.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {RoomReservation} from '../employee-details/models/RoomReservation';
import {RoomReservationService} from '../services/room-reservation.service';
import {InstrumentReservationService} from '../services/instrument-reservation.service';
import {InstrumentReservation} from '../employee-details/models/InstrumentReservation';



@Component({
  selector: 'app-room-details',
  templateUrl: './room-details.component.html',
  styleUrls: ['./room-details.component.css'],
})
export class RoomDetailsComponent implements OnInit {
  roomId: number;
  room: RoomModel;
  roomsList: RoomModel[];
  roomReservationsList: RoomReservation[];
  instrumentReservationsList: InstrumentReservation[];
  isInstrumentReservationOpen = false;
  isRoomReservationOpen = false;
  
  @Input() instrument: InstrumentModel;

  @Output() rentEvent = new EventEmitter<number>();

  constructor(private instrumentTypesService: InstrumentTypeService,
              private route: ActivatedRoute,
              private roomService: RoomService,
              private roomReservationService: RoomReservationService,
              private instrumentReservationService: InstrumentReservationService,
              private modalService: NgbModal,
              private router: Router) {
  }

  ngOnInit() {
    this.roomId = Number(this.route.snapshot.params.id);
    this.roomService.fetchRoom(this.roomId).then((room: RoomModel) => this.room = room);
    this.resolveRooms();
    this.resolveRoomReservations();
    this.resolveInstrumentReservations();
  }



  resolveRooms() {
    this.roomService.fetchRoomsList().then((list: RoomModel[]) => this.roomsList = list);
  }

  resolveRoomReservations() {
    this.roomReservationService.fetchRoomReservationsList().then((list: RoomReservation[]) => this.roomReservationsList = list);
  }

  resolveInstrumentReservations() {
    this.instrumentReservationService.fetchInstrumentReservationsList().then((list: InstrumentReservation[]) => this.instrumentReservationsList = list);
  }


  onBackClick() {
    this.router.navigate(['rooms']);
  }

  getDate(date: Date) {
    const newdate = new Date(date);
    return newdate.toLocaleDateString();
  }

  getTime(date: Date) {
    const newdate = new Date(date);
    return newdate.toLocaleTimeString();
  }

}


