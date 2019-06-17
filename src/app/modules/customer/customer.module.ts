import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerListComponent } from './components/customer-list/customer-list.component';
import { CustomerViewComponent } from './components/customer-view/customer-view.component';

@NgModule({
  declarations: [CustomerListComponent, CustomerViewComponent],
  imports: [
    CommonModule
  ]
})
export class CustomerModule { }
