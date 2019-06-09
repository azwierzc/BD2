import {Component, EventEmitter, Inject, Input, OnInit, Output} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {RoomService} from '../services/room.service';
import {RoomModel} from '../rooms/models/RoomModel';
import {InstrumentModel} from '../instruments/models/InstrumentModel';
import {InstrumentService} from '../services/instrument.service';
import {InstrumentTypeService} from '../services/instrumentType.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: 'app-room-details',
  templateUrl: './room-details.component.html',
  styleUrls: ['./room-details.component.css'],
})
export class RoomDetailsComponent implements OnInit {
  roomId: number;
  room: RoomModel;
  roomsList: RoomModel[];
  isInstrumentReservationOpen = false;
  isRoomReservationOpen = false;
  
  @Input() instrument: InstrumentModel;

  @Output() rentEvent = new EventEmitter<number>();

  constructor(private instrumentTypesService: InstrumentTypeService,
              private route: ActivatedRoute,
              private roomService: RoomService,
              private service: InstrumentService,
              private modalService: NgbModal,
              private router: Router) {
  }

  ngOnInit() {
    this.roomId = Number(this.route.snapshot.params.id);
    this.roomService.fetchRoom(this.roomId).then((room: RoomModel) => this.room = room);
    this.resolveRooms();
  }



  resolveRooms() {
    this.roomService.fetchRoomsList().then((list: RoomModel[]) => this.roomsList = list);
  }

  onInstrumentOptionClick() {
    if (this.isInstrumentReservationOpen === false) {
      this.isInstrumentReservationOpen = true;
    } else {
      this.isInstrumentReservationOpen = false;
    }
  }

  onRoomOptionClick() {
    if (this.isRoomReservationOpen === false) {
      this.isRoomReservationOpen = true;
    } else {
      this.isRoomReservationOpen = false;
    }
  }


  onBackClick() {
    this.router.navigate(['rooms']);
  }

}


