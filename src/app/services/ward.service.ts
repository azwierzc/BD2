import { Injectable } from '@angular/core';
import {serverAddress} from '../../assets/server.constant';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WardService {

  constructor(private http: HttpClient) { }

  fetchWardsList(): Promise<any> {
    return this.http.get(serverAddress + '/wards')
      .toPromise();
  }
}
