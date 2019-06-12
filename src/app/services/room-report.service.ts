import {Injectable} from '@angular/core';
import {serverAddress} from '../../assets/server.constant';
import {HttpClient} from '@angular/common/http';
import {RoomReportModel} from '../employee-details/models/RoomReportModel';


@Injectable({
  providedIn: 'root'
})
export class RoomReportService {

  constructor(private http: HttpClient) {
  }

  fetchRoomReportsList(): Promise<any> {
    return this.http.get(serverAddress + '/room_report')
      .toPromise();
  }

  fetchRoomReport(id: number): Promise<any> {
    return this.http.get(serverAddress + '/room_report' + id)
      .toPromise();
  }


  deleteRoomReport(id: number): Promise<any>  {
    return this.http.delete(serverAddress + '/room_report' + '/' + id).toPromise();
  }

  saveRoomReport(roomReport: RoomReportModel): Promise<any> {
    return this.http.post(serverAddress + '/room_report', roomReport).toPromise();
  }
}

