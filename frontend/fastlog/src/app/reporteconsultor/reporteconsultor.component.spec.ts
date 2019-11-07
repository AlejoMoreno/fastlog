import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteconsultorComponent } from './reporteconsultor.component';

describe('ReporteconsultorComponent', () => {
  let component: ReporteconsultorComponent;
  let fixture: ComponentFixture<ReporteconsultorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReporteconsultorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReporteconsultorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
