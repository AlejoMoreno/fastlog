import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeguimientorutaComponent } from './seguimientoruta.component';

describe('SeguimientorutaComponent', () => {
  let component: SeguimientorutaComponent;
  let fixture: ComponentFixture<SeguimientorutaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeguimientorutaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeguimientorutaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
