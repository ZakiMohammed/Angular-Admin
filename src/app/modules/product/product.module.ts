import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductViewComponent } from './components/product-view/product-view.component';
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  { path: '', component: ProductListComponent },
  { path: ':id', component: ProductViewComponent },
];

@NgModule({
  declarations: [ProductListComponent, ProductViewComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ProductModule { }
