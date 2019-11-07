import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteruteadorComponent } from './reporteruteador.component';

describe('ReporteruteadorComponent', () => {
  let component: ReporteruteadorComponent;
  let fixture: ComponentFixture<ReporteruteadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReporteruteadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReporteruteadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
