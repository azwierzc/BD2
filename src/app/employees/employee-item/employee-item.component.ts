import {Component, Input, OnInit} from '@angular/core';
import {EmployeeModel} from '../models/EmployeeModel';

@Component({
  selector: 'app-employee-item',
  templateUrl: './employee-item.component.html',
  styleUrls: ['./employee-item.component.css']
})
export class EmployeeItemComponent implements OnInit {
  @Input() employee: EmployeeModel;
  constructor() { }

  ngOnInit() {
  }

}
