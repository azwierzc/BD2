import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {RoomReservation} from '../models/RoomReservation';
import {ActivatedRoute, Router} from '@angular/router';
import {RoomReservationService} from '../../services/room-reservation.service';
import {debounceTime} from 'rxjs/operators';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-room-reservation',
  templateUrl: './room-reservation.component.html',
  styleUrls: ['./room-reservation.component.css']
})
export class RoomReservationComponent implements OnInit {
  roomReservation: RoomReservation;
  private alert = new Subject<string>();
  staticAlertClosed = false;
  alertMessage: string;
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
    setTimeout(() => this.staticAlertClosed = true, 20000);
    this.alert.subscribe((message) => this.alertMessage = message);
    this.alert.pipe(debounceTime(5000)).subscribe(() => this.alertMessage = null);

    this.roomReservation.roomId = this.roomId;
  }

  onSave() {
    this.service.saveRoomReservation(this.roomReservation).then(() => this.router.navigate(['/employees']))
      .then( () => this.activeModal.close()).catch(() => this.viewMessage());
  }

  getDate(date: Date): string {
    return date.toLocaleDateString();
  }

  getTime(date: Date): string {
    return date.toLocaleTimeString();
  }

  viewMessage() {
    this.alert.next('Nieprawidłowy czas wypożyczenia.');
  }
}
