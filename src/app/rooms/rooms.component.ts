import {Component, OnInit} from '@angular/core';
import {RoomModel} from '../employee-details/models/RoomModel';
import {RoomService} from '../services/room.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {RoomToAddModel} from './models/RoomToAddModel';
import {Router} from '@angular/router';
import {debounceTime} from 'rxjs/operators';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {

  roomToAddTypeOptions: string[] = ['MRI', 'operacyjna', 'RTG', 'okołozabiegowa', 'chorych'];
  room: RoomModel;
  roomsList: RoomModel[];
  roomToAdd: RoomToAddModel;
  private alert = new Subject<string>();
  private alertS = new Subject<string>();
  private alertP = new Subject<string>();
  staticAlertClosed = false;
  alertMessage: string;
  alertMessageS: string;
  alertMessageP: string;
  constructor(
    private service: RoomService,
    private modalService: NgbModal,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.roomToAdd = new RoomToAddModel();
    this.resolveRooms();
    setTimeout(() => this.staticAlertClosed = true, 20000);
    this.alert.subscribe((message) => this.alertMessage = message);
    this.alertS.subscribe((messageS) => this.alertMessageS = messageS);
    this.alertP.subscribe((messageS) => this.alertMessageP = messageS);
    this.alert.pipe(debounceTime(5000)).subscribe(() => this.alertMessage = null);
    this.alertS.pipe(debounceTime(5000)).subscribe(() => this.alertMessageS = null);
    this.alertP.pipe(debounceTime(5000)).subscribe(() => this.alertMessageP = null);
  }

  resolveRooms() {
    this.service.fetchRoomsList().then((list: RoomModel[]) => this.roomsList = list)
      .then(() => {

        this.roomsList.forEach((room) => {
          if (room.type === 'SURGERY') {
            room.type = 'operacyjna';
          } else if (room.type === 'PERIOPERATIVE') {
            room.type = 'okołozabiegowa';
          } else if (room.type === 'PATIENT') {
            room.type = 'chorych';
          } else if (room.type === 'MRI') {
            room.type = 'MRI';
          } else if (room.type === 'RTG')  {
            room.type = 'RTG';
          }
        });
      });
  }

  onDeleteEvent(id: number) {
    this.service.deleteRoom(id).then(() => this.resolveRooms()).catch((error) => this.viewMessage());
    this.alert.pipe(debounceTime(5000)).subscribe(() => this.alertMessage = null);
  }

  onDetailsEvent(id: number) {
    this.router.navigate(['rooms/' + id]);
  }

  onAddRoomClick(modal) {
    this.modalService.open(modal, {ariaLabelledBy: 'modal-basic-title'});
  }

  saveReport(modal) {
    if (this.roomToAdd.type === 'operacyjna') {
      this.roomToAdd.type = 'SURGERY';
    } else if (this.roomToAdd.type === 'okołozabiegowa') {
      this.roomToAdd.type = 'PERIOPERATIVE';
    } else if (this.roomToAdd.type === 'chorych') {
      this.roomToAdd.type = 'PATIENT';
    } else if (this.roomToAdd.type === 'MRI') {
      this.roomToAdd.type = 'MRI';
    } else {
      this.roomToAdd.type = 'RTG';
    }
    if (!this.roomToAdd.type || !this.roomToAdd.number) {this.viewMessageP(modal); }
    this.service.saveRoom(this.roomToAdd).then(() => this.resolveRooms()).then(() => modal.close())
      .catch((error) => this.viewMessageS());
  }

  viewMessage() {
    this.alert.next('Brak uprawnień do usunięcia sali.');
  }

  viewMessageS() {
    this.alertS.next('Brak uprawnień do dodania sali.');
  }

  viewMessageP(modal) {
    this.alertS.next('Uzupełnij numer seryjny i typ urządzenia');
    this.onAddRoomClick(modal);
  }
}
