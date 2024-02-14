import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { ProductService } from '../../core/services/product.service';

@Component({
  selector: 'app-filters',
  standalone: true,
  imports: [CommonModule, NgSelectModule, NgbModule, FormsModule, ReactiveFormsModule],
  templateUrl: './filters.component.html',
  styleUrl: './filters.component.scss'
})
export class FiltersComponent implements OnInit{
  colors = ['Red', 'Black', 'Blue', 'White', 'Grey', 'Green', 'Yellow'];
  categories = ['Pants & Shorts', 'Outerwear', 'Tops', 'Dresses', 'Skirts', 'Accessories'];
  selectedColorItem!: string;
  selectedCategoryItem!: string;
  selectedNameItem!: string;

  filterBy$ = this.productService.filterBy$;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
  }

  filterBy(id: string, selectedItem: string) {
    this.filterBy$.next({filterKey: id, value: selectedItem})
  }

  filterByPrice(range: string, $event: any) {
    let min = 0;
    let max = 1000;
    if(range=== 'min') {
      min = $event.target.value
    } else {
      max = $event.target.value
    }
    this.filterBy$.next({filterKey: 'price', min: min, max: max})
  }
}
