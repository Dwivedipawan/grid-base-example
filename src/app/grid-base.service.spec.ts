import { TestBed } from '@angular/core/testing';

import { GridBaseService } from './grid-base.service';

describe('GridBaseService', () => {
  let service: GridBaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GridBaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
