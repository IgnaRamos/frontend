/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AgendarService } from './agendar.service';

describe('Service: Agendar', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AgendarService]
    });
  });

  it('should ...', inject([AgendarService], (service: AgendarService) => {
    expect(service).toBeTruthy();
  }));
});
