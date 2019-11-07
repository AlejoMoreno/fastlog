import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignacionrutaComponent } from './asignacionruta.component';

describe('AsignacionrutaComponent', () => {
  let component: AsignacionrutaComponent;
  let fixture: ComponentFixture<AsignacionrutaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsignacionrutaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsignacionrutaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
