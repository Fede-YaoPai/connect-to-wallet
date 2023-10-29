import { TestBed } from '@angular/core/testing';

import { MetamaskWalletService } from './metamask-wallet.service';

describe('MetamaskWalletService', () => {
  let service: MetamaskWalletService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MetamaskWalletService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
