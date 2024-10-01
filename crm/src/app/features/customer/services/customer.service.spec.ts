import { TestBed } from '@angular/core/testing';

import { CustomerService } from './customer.service';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { Observable } from 'rxjs';
import { customersMock } from '../../../../../__mocks__/api/customer';

describe('CustomerService', () => {
  let service: CustomerService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
      ]
    });
    service = TestBed.inject(CustomerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy(); 
  });
  
  describe('getAll', () => {
    it('should return an Observable', () => {
      expect(service.getAll()).toBeInstanceOf(Observable);
    });
  });

  describe('getById', () => {
    it('should return an Observable', () => {
      expect(service.getById(1)).toBeInstanceOf(Observable);
    });
  });

  describe('postCustomer', () => {
    it('should return an Observable', () => {
      expect(service.postCustomer(customersMock[0])).toBeInstanceOf(Observable);
    });
  });

  describe('putCustomer', () => {
    it('should return an Observable', () => {
      expect(service.putCustomer(customersMock[0])).toBeInstanceOf(Observable);
    });
  });

  describe('deleteById', () => {
    it('should return an Observable', () => {
      expect(service.deleteById(1)).toBeInstanceOf(Observable);
    });
  });

});
