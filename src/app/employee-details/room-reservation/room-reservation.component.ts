import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {RoomReservation} from '../models/RoomReservation';
import {ActivatedRoute} from '@angular/router';
import {RoomReservationService} from '../../services/room-reservation.service';

@Component({
  selector: 'app-room-reservation',
  templateUrl: './room-reservation.component.html',
  styleUrls: ['./room-reservation.component.css']
})
export class RoomReservationComponent implements OnInit {
  roomReservation: RoomReservation;
  @Input() employeeId: number;
  @Input() roomId: number;
  constructor(private activeModal: NgbActiveModal, private route: ActivatedRoute, private service: RoomReservationService) { }

  ngOnInit() {
    this.roomReservation = new RoomReservation();
    this.roomReservation.employeeId = this.employeeId;
    this.roomReservation.roomId = this.roomId;
  }

  onSave() {
    this.service.saveRoomReservation(this.roomReservation);
    this.activeModal.close();
  }
}
