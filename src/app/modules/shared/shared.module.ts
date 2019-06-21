import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from "@angular/common/http";
import { DataTablesModule } from 'angular-datatables';

import { SearchComponent } from './components/search/search.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { AlertComponent } from './components/alert/alert.component';

@NgModule({
  declarations: [SearchComponent, BreadcrumbComponent, AlertComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    DataTablesModule
  ],
  exports: [
    SearchComponent,
    BreadcrumbComponent,
    AlertComponent,
    CommonModule,
    DataTablesModule
  ]
})
export class SharedModule { }
