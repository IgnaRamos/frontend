/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { IndicacionesService } from './indicaciones.service';

describe('Service: Indicaciones', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IndicacionesService]
    });
  });

  it('should ...', inject([IndicacionesService], (service: IndicacionesService) => {
    expect(service).toBeTruthy();
  }));
});
