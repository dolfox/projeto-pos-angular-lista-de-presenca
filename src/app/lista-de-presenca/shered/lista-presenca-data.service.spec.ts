import { TestBed } from '@angular/core/testing';

import { ListaPresencaDataService } from './lista-presenca-data.service';

describe('ListaPresencaDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ListaPresencaDataService = TestBed.get(ListaPresencaDataService);
    expect(service).toBeTruthy();
  });
});
