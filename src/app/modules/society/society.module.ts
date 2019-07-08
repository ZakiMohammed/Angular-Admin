import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SocietyListResolverService } from './services/society-list-resolver.service';
import { SocietyResolverService } from './services/society-resolver.service';

import { SocietyListComponent } from './components/society-list/society-list.component';
import { SocietyEditComponent } from './components/society-edit/society-edit.component';

const routes: Routes = [
  { 
    path: '', 
    component: 
    SocietyListComponent,
    resolve: { 
      resolveData: SocietyListResolverService
    } 
  },
  { 
    path: ':id/edit', 
    component: SocietyEditComponent,
    resolve: { 
      resolveData: SocietyResolverService 
    }
   },
];

@NgModule({
  declarations: [SocietyListComponent, SocietyEditComponent],
  imports: [
    SharedModule,
    FormsModule, 
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class SocietyModule { }
