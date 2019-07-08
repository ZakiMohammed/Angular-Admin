import { TestBed } from '@angular/core/testing';

import { SocietyListResolverService } from './society-list-resolver.service';

describe('SocietyListResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SocietyListResolverService = TestBed.get(SocietyListResolverService);
    expect(service).toBeTruthy();
  });
});
