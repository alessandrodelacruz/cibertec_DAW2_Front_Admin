import { TestBed } from '@angular/core/testing';

import { CuentausuarioService } from './cuentausuario.service';

describe('CuentausuarioService', () => {
  let service: CuentausuarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CuentausuarioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
