import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(
    private http: HttpClient
  ) { }

  getAll() {
    this.http.get('http://localhost:3002/customers')
      .subscribe((customers) => {
        console.log(customers);
      })
  }
}
