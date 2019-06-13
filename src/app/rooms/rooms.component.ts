import {Component, OnInit} from '@angular/core';
import {RoomModel} from '../employee-details/models/RoomModel';
import {RoomService} from '../services/room.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {RoomToAddModel} from './models/RoomToAddModel';
import {Router} from '@angular/router';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {
  roomToAddTypeOptions: string[] = ['MRI', 'operacyjna', 'RTG', 'okołozabiegowa', 'chorych'];

  roomsList: RoomModel[];
  room: RoomModel;
  roomToAdd: RoomToAddModel;

  constructor(
    private service: RoomService,
    private modalService: NgbModal,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.roomToAdd = new RoomToAddModel();
    this.resolveRooms();
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
    this.service.deleteRoom(id).then(() => this.resolveRooms());
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

    this.service.saveRoom(this.roomToAdd).then(() => this.resolveRooms());
    modal.close();
  }
}
