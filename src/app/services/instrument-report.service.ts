import {Injectable} from '@angular/core';
import {serverAddress} from '../../assets/server.constant';
import {HttpClient} from '@angular/common/http';
import {InstrumentReportModel} from '../employee-details/models/InstrumentReportModel';


@Injectable({
  providedIn: 'root'
})
export class InstrumentReportService {

  constructor(private http: HttpClient) {
  }

  fetchInstrumentReportsList(): Promise<any> {
    return this.http.get(serverAddress + '/instrument_report')
      .toPromise();
  }

  fetchInstrumentReport(id: number): Promise<any> {
    return this.http.get(serverAddress + '/instrument_report' + id)
      .toPromise();
  }


  deleteInstrumentReport(id: number): Promise<any>  {
    return this.http.delete(serverAddress + '/instrument_report' + '/' + id).toPromise();
  }

  saveInstrumentReport(instrumentReport: InstrumentReportModel): Promise<any> {
    return this.http.post(serverAddress + '/instrument_report', instrumentReport).toPromise();
  }
}

