import {Injectable} from '@angular/core';
import {serverAddress} from '../../assets/server.constant';
import {HttpClient} from '@angular/common/http';
import {WardModel} from '../employees/models/WardModel';


@Injectable({
  providedIn: 'root'
})
export class WardService {

  constructor(private http: HttpClient) {
  }

  fetchWardsList(): Promise<any> {
    return this.http.get(serverAddress + '/wards')
      .toPromise();
  }

  fetchWard(id: number): Promise<any> {
    return this.http.get(serverAddress + '/wards/' + id)
      .toPromise();
  }

  deleteWard(id: number): Promise<any> {
    return this.http.delete(serverAddress + '/wards' + '/' + id).toPromise();
  }

  saveWard(ward: WardModel): Promise<any> {
    return this.http.post(serverAddress + '/wards', ward).toPromise();
  }
}
