import { TestBed } from '@angular/core/testing';

import { NarutoService } from './naruto.service';

describe('NarutoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NarutoService = TestBed.get(NarutoService);
    expect(service).toBeTruthy();
  });
});
