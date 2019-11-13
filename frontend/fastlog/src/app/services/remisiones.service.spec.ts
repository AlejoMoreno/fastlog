import { TestBed, inject } from '@angular/core/testing';

import { RemisionesService } from './remisiones.service';

describe('RemisionesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RemisionesService]
    });
  });

  it('should ...', inject([RemisionesService], (service: RemisionesService) => {
    expect(service).toBeTruthy();
  }));
});
