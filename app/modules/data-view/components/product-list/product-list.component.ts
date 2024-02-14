import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductItemComponent } from './product-item/product-item.component';
import { FiltersComponent } from '../../../filters/filters.component';
import { ProductService } from '../../../../core/services/product.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [
    CommonModule, 
    NgbModule,
    MatPaginatorModule,
    ProductItemComponent, 
    FiltersComponent
  ],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent implements OnInit {
  getAllProducts$ = this.productService.getAllProducts$;
  filteredData$ = this.productService.filteredData$;
  lowValue = 0;
  highValue = 20;

  constructor(private productService: ProductService) {}
 ngOnInit(): void {

 }

  getPaginatorData(event: PageEvent): PageEvent {
    this.lowValue = event.pageIndex * event.pageSize;
    this.highValue = this.lowValue + event.pageSize;
    return event;
  }
}
