import { TestBed, inject } from '@angular/core/testing';

import { CasacomercialService } from './casacomercial.service';

describe('CasacomercialService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CasacomercialService]
    });
  });

  it('should ...', inject([CasacomercialService], (service: CasacomercialService) => {
    expect(service).toBeTruthy();
  }));
});
