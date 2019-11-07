import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerarremisionComponent } from './generarremision.component';

describe('GenerarremisionComponent', () => {
  let component: GenerarremisionComponent;
  let fixture: ComponentFixture<GenerarremisionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenerarremisionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerarremisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
