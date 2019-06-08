import {Component, OnInit} from '@angular/core';
import {InstrumentModel} from './models/InstrumentModel';
import {InstrumentService} from '../services/instrument.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {InstrumentToAddModel} from './models/InstrumentToAddModel';
import {InstrumentTypeModel} from './models/InstrumentTypeModel';
import {InstrumentTypeService} from '../services/instrumentType.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-Instruments',
  templateUrl: './instruments.component.html',
  styleUrls: ['./instruments.component.css']
})
export class InstrumentsComponent implements OnInit {
  instrumentTypeOptions: string[] = ['WOZEK', 'MATERAC'];

  instrumentsList: InstrumentModel[];
  instrumentToAdd: InstrumentToAddModel;

  instrumentTypesList: InstrumentTypeModel[];

  constructor(private service: InstrumentService,
              private instrumentTypesService: InstrumentTypeService,
              private modalService: NgbModal,
              private router: Router
  ) {
  }

  ngOnInit() {
    this.instrumentToAdd = new InstrumentToAddModel();
    this.instrumentToAdd.instrumentTypeId = 1; // TODO: Remove this statically selected ward
    this.resolveInstruments();
    this.resolveInstrumentTypes();
  }

  resolveInstruments() {
    this.service.fetchInstrumentsList().then((list: InstrumentModel[]) => this.instrumentsList = list);
  }

  resolveInstrumentTypes() {
    this.instrumentTypesService.fetchInstrumentTypesList().then((list: InstrumentTypeModel[]) => this.instrumentTypesList = list);
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
