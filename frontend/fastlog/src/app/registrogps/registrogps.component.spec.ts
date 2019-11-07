import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrogpsComponent } from './registrogps.component';

describe('RegistrogpsComponent', () => {
  let component: RegistrogpsComponent;
  let fixture: ComponentFixture<RegistrogpsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrogpsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrogpsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
