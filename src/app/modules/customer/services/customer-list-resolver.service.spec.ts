import { TestBed } from '@angular/core/testing';

import { CustomerListResolverService } from './customer-list-resolver.service';

describe('CustomerListResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CustomerListResolverService = TestBed.get(CustomerListResolverService);
    expect(service).toBeTruthy();
  });
});
