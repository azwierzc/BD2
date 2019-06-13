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

  roomsList: RoomModel[];
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
    this.service.fetchRoomsList().then((list: RoomModel[]) => this.roomsList = list);
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
    this.service.saveRoom(this.roomToAdd).then(() => this.resolveRooms());
    modal.close();
  }
}
