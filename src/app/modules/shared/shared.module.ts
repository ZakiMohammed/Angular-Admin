import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from 'angular-datatables';

import { SearchComponent } from './components/search/search.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';

@NgModule({
  declarations: [SearchComponent, BreadcrumbComponent],
  imports: [
    CommonModule,
    DataTablesModule
  ],
  exports: [
    SearchComponent,
    BreadcrumbComponent,
    CommonModule,
    DataTablesModule
  ]
})
export class SharedModule { }
