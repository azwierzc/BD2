import {Injectable} from '@angular/core';
import {EmployeeToAddModel} from '../employees/models/EmployeeToAddModel';
import {serverAddress} from '../../assets/server.constant';
import {HttpClient} from '@angular/common/http';
import {RoomReservation} from '../employee-details/models/RoomReservation';

@Injectable({
  providedIn: 'root'
})
export class RoomReservationService {

  constructor(private http: HttpClient) {
  }

  saveRoomReservation(roomReservation: RoomReservation): Promise<any> {
    return this.http.post(serverAddress + '/room_reservation', roomReservation).toPromise();
  }
}



