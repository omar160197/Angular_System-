import { TestBed } from '@angular/core/testing';

import { CustomerService } from "./customer.service";

describe("CustomerService", () => {
  let service: CustomerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomerService);
  });

  describe('method1', () => {
    it('should ...', () => {
      expect(service).toBeTruthy();
    });

  });
});
