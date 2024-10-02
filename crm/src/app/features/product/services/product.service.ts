import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { Product } from '../model/product';
import { Observable } from 'rxjs';

const url = environment.api + 'products/';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  /**
   * Inject HttpClient
   */
  #http = inject(HttpClient);

  getProducts(): Observable<Product[]> {
    return this.#http.get<Product[]>(url);
  }

  deleteProduct(productId: number): Observable<object> {
    return this.#http.delete(url + productId);
  }
  
}
