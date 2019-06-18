import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerListComponent } from './components/customer-list/customer-list.component';
import { CustomerViewComponent } from './components/customer-view/customer-view.component';
import { Routes, RouterModule  } from '@angular/router';

const routes: Routes = [
  { path: '', component: CustomerListComponent },
  { path: ':id', component: CustomerViewComponent },
];

@NgModule({
  declarations: [CustomerListComponent, CustomerViewComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class CustomerModule { }
