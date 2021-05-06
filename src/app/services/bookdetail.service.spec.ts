import { TestBed } from '@angular/core/testing';

import { BookdetailService } from './bookdetail.service';

describe('BookdetailService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BookdetailService = TestBed.get(BookdetailService);
    expect(service).toBeTruthy();
  });
});
