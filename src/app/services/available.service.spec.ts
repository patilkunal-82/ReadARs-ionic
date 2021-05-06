import { TestBed, inject } from '@angular/core/testing';

import { AvailableService } from './available.service';

describe('AvailableService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AvailableService]
    });
  });

  it('should be created', inject([AvailableService], (service: AvailableService) => {
    expect(service).toBeTruthy();
  }));
});
