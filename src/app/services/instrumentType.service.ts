import { Injectable } from '@angular/core';
import {serverAddress} from '../../assets/server.constant';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InstrumentTypeService {

  constructor(private http: HttpClient) { }

  fetchInstrumentTypesList(): Promise<any> {
    return this.http.get(serverAddress + '/instrumentTypes')
      .toPromise();
  }
}
