import { Injectable } from '@angular/core';
import {serverAddress} from '../../assets/server.constant';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  constructor(private http: HttpClient) { }


  fetchRoomsList(): Promise<any> {
    return this.http.get(serverAddress + '/rooms')
      .toPromise();
  }

}
