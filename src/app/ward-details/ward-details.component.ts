import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Route, Router} from '@angular/router';

import {WardService} from '../services/ward.service';
import {EmployeeModel} from '../employees/models/EmployeeModel';
import {InstrumentModel} from '../instruments/models/InstrumentModel';
import {WardModel} from '../employees/models/WardModel';

@Component({
  selector: 'app-ward-details',
  templateUrl: './ward-details.component.html',
  styleUrls: ['./ward-details.component.css'],
})
export class WardDetailsComponent implements OnInit {
  wardId: number;
  ward: WardModel;


  constructor(
    private route: ActivatedRoute,
    private wardService: WardService,
    private router: Router,
  ) {
  }

  ngOnInit() {
    this.wardId = Number(this.route.snapshot.params.id);
    this.wardService.fetchWard(this.wardId).then((ward: WardModel) => this.ward = ward);

  }



  onBackClick() {
    this.router.navigate(['wards']);
  }



  public getDate(date: Date): string {
    const newDate = new Date(date);
    return newDate.toLocaleDateString();
  }

  public getTime(date: Date): string {
    const newDate = new Date(date);
    return newDate.toLocaleTimeString();
  }
}


