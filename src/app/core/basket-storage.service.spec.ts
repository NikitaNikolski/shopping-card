import { TestBed, inject } from '@angular/core/testing';

import { BasketStorageService } from './basket-storage.service';

describe('BasketStorageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BasketStorageService]
    });
  });

  it('should be created', inject([BasketStorageService], (service: BasketStorageService) => {
    expect(service).toBeTruthy();
  }));
});
