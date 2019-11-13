import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CasacomercialesComponent } from './casacomerciales.component';

describe('CasacomercialesComponent', () => {
  let component: CasacomercialesComponent;
  let fixture: ComponentFixture<CasacomercialesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CasacomercialesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CasacomercialesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
