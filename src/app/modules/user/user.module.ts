import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { Routes, RouterModule } from "@angular/router";
import { AuthGuard } from 'src/app/guards/auth.guard';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

const routes: Routes = [
  { 
    path: 'login', 
    component: LoginComponent, 
    canActivate: [AuthGuard] 
  },
  { 
    path: 'register', 
    component: RegisterComponent,
    canActivate: [AuthGuard] 
  },
];

@NgModule({
  declarations: [LoginComponent, RegisterComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class UserModule { }
