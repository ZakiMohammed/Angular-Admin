import { Component, OnInit, Renderer2 } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Constants } from 'src/app/modules/shared/helper/constants';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/modules/shared/services/auth.service';
import { ProfileService } from 'src/app/modules/account/services/profile.service';
import { Alert } from 'src/app/modules/shared/models/alert';
import { Profile } from 'src/app/modules/account/models/profile';
import { Auth } from 'src/app/modules/shared/models/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  fc: FormGroup;
  alert: Alert;
  
  constructor(
    private renderer: Renderer2, 
    private builder: FormBuilder,
    private router: Router,
    private auth: AuthService,
    private profileService: ProfileService) {
    // this.renderer.addClass(document.body, 'bg-dark');
    this.alert = new Alert(false, '', '');
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

      let email = this.fc.value.email;
      let password = this.fc.value.password;

      this.profileService.login(email, password).then(response => {
        console.log(response);
        let profile = <Profile>response;
        if (profile) {
          let auth = new Auth(profile.id, profile.email, profile.firstName + ' ' + profile.lastName);
          this.auth.onLogin(auth);
          this.router.navigate(['/dashboard']);
        } else {
          this.alert.error(Constants.MESSAGE_ERROR);  
        }
      }, error => {
        this.alert.error(Constants.MESSAGE_ERROR);
      });
    }
  }

}
