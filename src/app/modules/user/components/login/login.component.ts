import { Component, OnInit, Renderer2 } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  fc: FormGroup;
  
  constructor(
    private renderer: Renderer2, 
    private builder: FormBuilder) {
    // this.renderer.addClass(document.body, 'bg-dark');
  }

  ngOnInit(): void {    
    this.fc = this.builder.group({
      email: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      password: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(8)]],
      rememberMe: false      
    });
  }

  ngOnDestroy() {
    // this.renderer.removeClass(document.body, 'bg-dark');
  }

  onSubmit() {
    
  }

}
