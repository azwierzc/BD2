import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {serverAddress} from '../../assets/server.constant';
import {InstrumentToAddModel} from '../instruments/models/InstrumentToAddModel';

@Injectable({
  providedIn: 'root'
})
export class InstrumentService {

  constructor(private http: HttpClient) { }

  fetchInstrumentsList(): Promise<any> {
    return this.http.get(serverAddress + '/instruments')
      .toPromise();
  }

  fetchInstrument(id: number): Promise<any> {
    return this.http.get(serverAddress + '/instruments/' + id)
      .toPromise();
  }


  deleteInstrument(id: number): Promise<any>  {
    return this.http.delete(serverAddress + '/instruments' + '/' + id).toPromise();
  }

  saveInstrument(instrument: InstrumentToAddModel): Promise<any>  {
    return this.http.post(serverAddress + '/instruments', instrument).toPromise();
  }
}
