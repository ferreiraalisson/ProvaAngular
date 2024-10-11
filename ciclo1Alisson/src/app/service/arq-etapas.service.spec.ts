import { TestBed } from '@angular/core/testing';

import { ArqEtapasService } from './arq-etapas.service';

describe('ArqEtapasService', () => {
  let service: ArqEtapasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArqEtapasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
