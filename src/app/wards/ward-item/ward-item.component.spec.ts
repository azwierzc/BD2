import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WardItemComponent } from './ward-item.component';

describe('WardItemComponent', () => {
  let component: WardItemComponent;
  let fixture: ComponentFixture<WardItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WardItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WardItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
