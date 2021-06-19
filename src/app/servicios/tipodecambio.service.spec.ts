import { TestBed } from '@angular/core/testing';

import { TipodecambioService } from './tipodecambio.service';

describe('TipodecambioService', () => {
  let service: TipodecambioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TipodecambioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
