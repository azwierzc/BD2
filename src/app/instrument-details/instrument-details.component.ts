import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {InstrumentService} from '../services/instrument.service';
import {InstrumentModel} from '../instruments/models/InstrumentModel';

@Component({
  selector: 'app-instrument-details',
  templateUrl: './instrument-details.component.html',
  styleUrls: ['./instrument-details.component.css']
})
export class InstrumentDetailsComponent implements OnInit {
  instrumentId: number;
  instrument: InstrumentModel;

  constructor(private route: ActivatedRoute, private service: InstrumentService, private router: Router) { }

  ngOnInit() {
    this.instrumentId = Number(this.route.snapshot.params.id);
    this.service.fetchInstrument(this.instrumentId).then((instrument: InstrumentModel) => this.instrument = instrument);
  }

  onBackClick() {
    this.router.navigate(['instruments']);
  }
}
