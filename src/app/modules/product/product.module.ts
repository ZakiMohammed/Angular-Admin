import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductViewComponent } from './components/product-view/product-view.component';

@NgModule({
  declarations: [ProductListComponent, ProductViewComponent],
  imports: [
    CommonModule
  ]
})
export class ProductModule { }
