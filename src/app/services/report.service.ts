import {Injectable} from '@angular/core';
import {serverAddress} from '../../assets/server.constant';
import {HttpClient} from '@angular/common/http';
import {ReportModel} from '../employee-details/models/ReportModel';


@Injectable({
  providedIn: 'root'
})
export class ReportService {

  constructor(private http: HttpClient) {
  }

  fetchReportsList(): Promise<any> {
    return this.http.get(serverAddress + '/report')
      .toPromise();
  }

  fetchReport(id: number): Promise<any> {
    return this.http.get(serverAddress + '/report' + id)
      .toPromise();
  }


  deleteReport(id: number): Promise<any>  {
    return this.http.delete(serverAddress + '/report' + '/' + id).toPromise();
  }

  saveReport(report: ReportModel): Promise<any> {
    return this.http.post(serverAddress + '/report', report).toPromise();
  }
}

