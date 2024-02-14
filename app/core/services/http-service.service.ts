import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from './../../environments/environment';
import { ProductItemModel } from '../models/product-item.model';

@Injectable({
  providedIn: 'root'
})
export class HttpProductService {
  server_api = environment.server;

  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<Array<ProductItemModel>> {
    return this.http.get<Array<ProductItemModel>>(`${this.server_api}/products`);
  }
}
