import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {RoomReservation} from '../models/RoomReservation';
import {ActivatedRoute, Router} from '@angular/router';
import {RoomReservationService} from '../../services/room-reservation.service';

@Component({
  selector: 'app-room-reservation',
  templateUrl: './room-reservation.component.html',
  styleUrls: ['./room-reservation.component.css']
})
export class RoomReservationComponent implements OnInit {
  roomReservation: RoomReservation;

  @Input() employeeId: number;
  @Input() employeeName: string;
  @Input() employeeSurname: string;
  @Input() roomId: number;

  constructor(
    private activeModal: NgbActiveModal,
    private route: ActivatedRoute,
    private service: RoomReservationService,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.roomReservation = new RoomReservation();
    this.roomReservation.employeeId = this.employeeId;
    this.roomReservation.employeeName = this.employeeName;
    this.roomReservation.employeeSurname = this.employeeSurname;

    this.roomReservation.roomId = this.roomId;
  }

  onSave() {
    this.service.saveRoomReservation(this.roomReservation);
    this.router.navigate(['/employees']);
    this.activeModal.close();
  }

  getDate(date: Date): string {
    return date.toLocaleDateString();
  }

  getTime(date: Date): string {
    return date.toLocaleTimeString();
  }
}
