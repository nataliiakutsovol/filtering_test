import { Injectable } from '@angular/core';
import { HttpProductService } from './http-service.service';
import { Observable, Subject, combineLatest, map, shareReplay } from 'rxjs';
import { ProductItemModel } from '../models/product-item.model';
import { FilterProperties } from '../models/filter-properties.enum';
import { Filter } from '../models/filter.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  filterBy$ = new Subject<Filter>();

  getAllProducts$: Observable<Array<ProductItemModel>> = this.httpService.getAllProducts();

  filteredData$: Observable<Array<ProductItemModel>> = combineLatest([this.getAllProducts$, this.filterBy$]).pipe(
    map(([getAllProducts, filters]: [Array<ProductItemModel>, Filter]) => {
      return this.filterBy(getAllProducts, filters)}),
    shareReplay(),
  );

  constructor(private httpService: HttpProductService) {}

  private filterBy(data: Array<ProductItemModel>, filters: any) {
    switch (filters.filterKey) {
      case FilterProperties.colors:
        return data.filter(el => el.colors.includes(filters.value));
      case FilterProperties.category:
        return data.filter(el => el.category === filters.value);
      case FilterProperties.name:
        return data.filter(el => el.name.toLocaleLowerCase().includes(filters.value.toLocaleLowerCase()))
      case FilterProperties.price:
        return data.filter(el => parseFloat(el.price) <= parseFloat(filters.max) && parseFloat(el.price) >= parseFloat(filters.min));
    }
    return data
  }
}