import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './components/search/search.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';

@NgModule({
  declarations: [SearchComponent, BreadcrumbComponent],
  imports: [
    CommonModule
  ],
  exports: [
    SearchComponent,
    BreadcrumbComponent
  ]
})
export class SharedModule { }
