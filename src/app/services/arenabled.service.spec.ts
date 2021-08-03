import { TestBed, inject } from '@angular/core/testing';

import { ARenabledService } from './arenabled.service';

describe('ARenabledService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ARenabledService]
    });
  });

  it('should be created', inject([ARenabledService], (service: ARenabledService) => {
    expect(service).toBeTruthy();
  }));
});
