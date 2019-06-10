import {Injectable} from '@angular/core';
import {serverAddress} from '../../assets/server.constant';
import {HttpClient} from '@angular/common/http';
import {RoomToAddModel} from '../rooms/models/RoomToAddModel';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  constructor(private http: HttpClient) {
  }

  fetchRoomsList(): Promise<any> {
    return this.http.get(serverAddress + '/rooms')
      .toPromise();
  }

  fetchRoom(id: number): Promise<any> {
    return this.http.get(serverAddress + '/rooms/' + id)
      .toPromise();
  }

  deleteRoom(id: number): Promise<any> {
    return this.http.delete(serverAddress + '/rooms' + '/' + id).toPromise();
  }

  saveRoom(room: RoomToAddModel): Promise<any> {
    return this.http.post(serverAddress + '/rooms', room).toPromise();
  }
}
