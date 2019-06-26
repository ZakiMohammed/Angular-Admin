import { NgModule } from '@angular/core';
import { Routes, RouterModule  } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { CustomerListComponent } from './components/customer-list/customer-list.component';
import { CustomerViewComponent } from './components/customer-view/customer-view.component';
import { CustomerEditComponent } from './components/customer-edit/customer-edit.component';

import { CustomerResolverService } from './services/customer-resolver.service';
import { CustomerListResolverService } from './services/customer-list-resolver.service';

const routes: Routes = [
  { 
    path: '', 
    component: 
    CustomerListComponent,
    resolve: { 
      resolveData: CustomerListResolverService
    } 
  },
  { 
    path: ':id', 
    component: CustomerViewComponent,
    resolve: { 
      resolveData: CustomerResolverService 
    } 
   },
  { 
    path: ':id/edit', 
    component: CustomerEditComponent,
    resolve: { 
      resolveData: CustomerResolverService 
    }
   },
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
