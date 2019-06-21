import { NgModule } from '@angular/core';
import { Routes, RouterModule  } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { CustomerListComponent } from './components/customer-list/customer-list.component';
import { CustomerViewComponent } from './components/customer-view/customer-view.component';
import { CustomerEditComponent } from './components/customer-edit/customer-edit.component';

const routes: Routes = [
  { path: '', component: CustomerListComponent },
  { path: ':id', component: CustomerViewComponent },
  { path: ':id/edit', component: CustomerEditComponent },
];

@NgModule({
  declarations: [CustomerListComponent, CustomerViewComponent, CustomerEditComponent],
  imports: [
    SharedModule,
    FormsModule, 
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class CustomerModule { }
