import { TestBed } from '@angular/core/testing';

import { EmbaucheService } from './embauche.service';

describe('EmbaucheServiceService', () => {
  let service: EmbaucheService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmbaucheService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
