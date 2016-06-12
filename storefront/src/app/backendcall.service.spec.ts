import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { BackendcallService } from './backendcall.service';

describe('Backendcall Service', () => {
  beforeEachProviders(() => [BackendcallService]);

  it('should ...',
      inject([BackendcallService], (service: BackendcallService) => {
    expect(service).toBeTruthy();
  }));
});
