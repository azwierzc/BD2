import {Injectable} from '@angular/core';
import {serverAddress} from '../../assets/server.constant';
import {HttpClient} from '@angular/common/http';
import {RoomReservation} from '../employee-details/models/RoomReservation';

@Injectable({
  providedIn: 'root'
})
export class RoomReservationService {

  constructor(private http: HttpClient) {
  }

  fetchRoomReservationsList(): Promise<any> {
    return this.http.get(serverAddress + '/room_reservation')
      .toPromise();
  }

  fetchRoomReservation(id: number): Promise<any> {
    return this.http.get(serverAddress + '/room_reservation' + id)
      .toPromise();
  }


  deleteRoomReservation(id: number): Promise<any>  {
    return this.http.delete(serverAddress + '/room_reservation' + '/' + id).toPromise();
  }

  saveRoomReservation(roomReservation: RoomReservation): Promise<any> {
    return this.http.post(serverAddress + '/room_reservation', roomReservation).toPromise();
  }
}



