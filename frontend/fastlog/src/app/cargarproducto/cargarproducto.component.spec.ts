import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CargarproductoComponent } from './cargarproducto.component';

describe('CargarproductoComponent', () => {
  let component: CargarproductoComponent;
  let fixture: ComponentFixture<CargarproductoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CargarproductoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CargarproductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
