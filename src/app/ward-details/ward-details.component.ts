import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Route, Router} from '@angular/router';
import {WardService} from '../services/ward.service';
import {EmployeeModel} from '../employees/models/EmployeeModel';
import {WardModel} from '../employees/models/WardModel';
import {EmployeeService} from '../services/employee.service';

@Component({
  selector: 'app-ward-details',
  templateUrl: './ward-details.component.html',
  styleUrls: ['./ward-details.component.css'],
})
export class WardDetailsComponent implements OnInit {
  wardId: number;
  ward: WardModel;
  wardEmployeesList: EmployeeModel[];
  isWardHasNoEmployee: boolean;

  constructor(
    private route: ActivatedRoute,
    private wardService: WardService,
    private employeeService: EmployeeService,
    private router: Router,
  ) {
  }

  ngOnInit() {
    this.wardId = Number(this.route.snapshot.params.id);
    this.wardService.fetchWard(this.wardId).then((ward: WardModel) => this.ward = ward);
    this.isWardHasNoEmployee = false;
    this.resolveWardsEmployee();
  }

  resolveWardsEmployee() {
    this.employeeService.fetchEmployeesList()
      .then((list: EmployeeModel[]) => this.wardEmployeesList = list.filter((employee) => employee.wardName === this.ward.name));


    if (this.wardEmployeesList == null) {
      this.isWardHasNoEmployee = true;
    }
  }


  onBackClick() {
    this.router.navigate(['wards']);
  }


}


