import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportetransportadorComponent } from './reportetransportador.component';

describe('ReportetransportadorComponent', () => {
  let component: ReportetransportadorComponent;
  let fixture: ComponentFixture<ReportetransportadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportetransportadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportetransportadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
