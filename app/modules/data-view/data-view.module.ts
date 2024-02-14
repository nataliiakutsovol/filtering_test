import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataViewRoutingModule } from './data-view-routing.module';
import { ProductListComponent } from './components/product-list/product-list.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DataViewRoutingModule,
    ProductListComponent
  ]
})
export class DataViewModule { }
