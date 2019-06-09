
import {Component, OnInit} from '@angular/core';
import {InstrumentModel} from './models/InstrumentModel';
import {InstrumentService} from '../services/instrument.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {InstrumentToAddModel} from './models/InstrumentToAddModel';
import {InstrumentTypeService} from '../services/instrumentType.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-instruments',
  templateUrl: './instruments.component.html',
  styleUrls: ['./instruments.component.css']
})
export class InstrumentsComponent implements OnInit {

  instrumentsList: InstrumentModel[];
  instrumentToAdd: InstrumentToAddModel;


  constructor(private service: InstrumentService,
              private instrumentTypesService: InstrumentTypeService,
              private modalService: NgbModal,
              private router: Router
  ) {
  }

  ngOnInit() {
    this.instrumentToAdd = new InstrumentToAddModel();
    this.resolveInstruments();
  }

  resolveInstruments() {
    this.service.fetchInstrumentsList().then((list: InstrumentModel[]) => this.instrumentsList = list);
  }

  onDeleteEvent(id: number) {
    this.service.deleteInstrument(id).then(() => this.resolveInstruments());
  }

  onDetailsEvent(id: number) {
    this.router.navigate(['Instruments/' + id]);
  }

  onAddInstrumentClick(modal) {
    this.modalService.open(modal, {ariaLabelledBy: 'modal-basic-title'});
  }

  saveReport(modal) {
    this.service.saveInstrument(this.instrumentToAdd).then(() => this.resolveInstruments());
    modal.close();
  }

}
