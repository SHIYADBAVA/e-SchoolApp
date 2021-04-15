import { TestBed } from '@angular/core/testing';

import { FtynewttService } from './ftynewtt.service';

describe('FtynewttService', () => {
  let service: FtynewttService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FtynewttService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
