import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ShellComponent } from './components/shell/shell.component';
import { AuthGuard } from './modules/shared/guards/auth.guard';

const routes: Routes = [
  { 
    path: '', 
    component: ShellComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'dashboard', component: DashboardComponent },
      {
        path: 'products',
        loadChildren: './modules/product/product.module#ProductModule'
      },
      {
        path: 'customers',
        loadChildren: './modules/customer/customer.module#CustomerModule'
      },
      {
        path: 'societies',
        loadChildren: './modules/society/society.module#SocietyModule'
      },
      {
        path: 'accounts',
        loadChildren: './modules/account/account.module#AccountModule'
      },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: '**', component: NotFoundComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
