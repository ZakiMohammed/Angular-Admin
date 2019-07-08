import { TestBed } from '@angular/core/testing';

import { SocietyResolverService } from './society-resolver.service';

describe('SocietyResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SocietyResolverService = TestBed.get(SocietyResolverService);
    expect(service).toBeTruthy();
  });
});
