import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportebodegueroComponent } from './reportebodeguero.component';

describe('ReportebodegueroComponent', () => {
  let component: ReportebodegueroComponent;
  let fixture: ComponentFixture<ReportebodegueroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportebodegueroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportebodegueroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
