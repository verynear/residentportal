import { TestBed, inject } from '@angular/core/testing';

import { DomhandlerService } from './domhandler.service';

describe('DomhandlerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DomhandlerService]
    });
  });

  it('should be created', inject([DomhandlerService], (service: DomhandlerService) => {
    expect(service).toBeTruthy();
  }));
});
