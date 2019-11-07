import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemisionesasignadasComponent } from './remisionesasignadas.component';

describe('RemisionesasignadasComponent', () => {
  let component: RemisionesasignadasComponent;
  let fixture: ComponentFixture<RemisionesasignadasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemisionesasignadasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemisionesasignadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
