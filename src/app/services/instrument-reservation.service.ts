import {Injectable} from '@angular/core';
import {serverAddress} from '../../assets/server.constant';
import {HttpClient} from '@angular/common/http';
import {InstrumentReservation} from '../employee-details/models/InstrumentReservation';

@Injectable({
  providedIn: 'root'
})
export class InstrumentReservationService {

  constructor(private http: HttpClient) {
  }

  saveInstrumentReservation(instrumentReservation: InstrumentReservation): Promise<any> {
    return this.http.post(serverAddress + '/instrument_reservation', instrumentReservation).toPromise();
  }
}



