import { TestBed } from '@angular/core/testing';

import { lojaService } from './loja.service';

describe('lojaService', () => {
  let service: lojaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(lojaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
