import { NgModule } from '@angular/core';
import { Routes, RouterModule  } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { ProfileEditComponent } from './components/profile/profile.component';
import { ProfileResolverService } from './services/profile-resolver.service';

const routes: Routes = [
  { 
    path: 'profile', 
    component: ProfileEditComponent,
    resolve: {
      resolveData: ProfileResolverService
    }
  },
];

@NgModule({
  declarations: [ProfileEditComponent],
  imports: [
    SharedModule,
    FormsModule, 
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class AccountModule { }
