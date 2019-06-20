import { NgModule } from '@angular/core';
import { Routes, RouterModule  } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

import { CustomerListComponent } from './components/customer-list/customer-list.component';
import { CustomerViewComponent } from './components/customer-view/customer-view.component';

const routes: Routes = [
  { path: '', component: CustomerListComponent },
  { path: ':id', component: CustomerViewComponent },
];

@NgModule({
  declarations: [CustomerListComponent, CustomerViewComponent],
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class CustomerModule { }
