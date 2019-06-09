import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {serverAddress} from '../../assets/server.constant';
import {EmployeeToAddModel} from '../employees/models/EmployeeToAddModel';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  fetchEmployeesList(): Promise<any> {
    return this.http.get(serverAddress + '/employee').toPromise();
  }

  fetchEmployee(id: number): Promise<any> {
    return this.http.get(serverAddress + '/employee/' + id).toPromise();
  }


  deleteEmployee(id: number): Promise<any>  {
    return this.http.delete(serverAddress + '/employee' + '/' + id).toPromise();
  }

  saveEmployee(employee: EmployeeToAddModel): Promise<any>  {
    return this.http.post(serverAddress + '/employee', employee).toPromise();
  }
}
