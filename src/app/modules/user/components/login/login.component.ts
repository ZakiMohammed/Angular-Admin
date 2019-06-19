import { Component, OnInit, Renderer2 } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Constants } from 'src/app/modules/shared/helper/constants';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/modules/shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  fc: FormGroup;
  
  constructor(
    private renderer: Renderer2, 
    private builder: FormBuilder,
    private router: Router,
    private auth: AuthService) {
    // this.renderer.addClass(document.body, 'bg-dark');
  }

  ngOnInit(): void {    
    this.fc = this.builder.group({
      email: ['', [Validators.required, Validators.email, Validators.minLength(3), Validators.maxLength(30)]],
      password: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(8)]],
      rememberMe: true
    });
  }

  ngOnDestroy() {
    // this.renderer.removeClass(document.body, 'bg-dark');
  }

  onSubmit() {
    if (this.fc.valid) {
      this.auth.onLogin({
        email: this.fc.value.email
      });
      this.router.navigate(['/dashboard']);
    }
  }

}
