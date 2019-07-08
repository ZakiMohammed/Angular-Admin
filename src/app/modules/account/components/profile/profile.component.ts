import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, FormControl } from '@angular/forms';
import { Profile } from '../../models/profile';
import { ProfileService } from '../../services/profile.service';
import { Alert } from 'src/app/modules/shared/models/alert';
import { Constants } from 'src/app/modules/shared/helper/constants';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileEditComponent implements OnInit {

  id: number;
  fg: FormGroup;
  profile: Profile;
  alert: Alert;

  constructor(
    private builder: FormBuilder,
    private route: ActivatedRoute,
    private profileService: ProfileService) {
      this.id = +this.route.snapshot.params.id || 1;    
      this.alert = new Alert(false, '', '');
      this.profile = new Profile();
  }

  get fc() { 
    return this.fg.controls; 
  }
  
  ngOnInit() {
    
    if (this.id !== 0) {
      this.profile = this.route.snapshot.data.resolveData.profile;
    }
    this.initializeForm();
  }

  initializeForm() {
    this.fg = this.builder.group({
      firstName: [this.profile.firstName, [Validators.required, Validators.minLength(3)]],
      lastName: [this.profile.lastName, [Validators.required, Validators.minLength(3)]],
      mobile: [this.profile.mobile, [Validators.required, Validators.minLength(7)]],
      email: [this.profile.email, [Validators.required, Validators.email]]
    });
  }

  onSubmit() {
    if (this.fg.valid) {
      let profile = new Profile();
      let dto = {...profile, ...this.fg.value};
      this.profileService.updateProfile(dto).then(response => {
        if (response.status) {
          this.alert.success(Constants.MESSAGE_SUBMITED);
        } else {
          this.alert.success(Constants.MESSAGE_ERROR);
        }
        this.fg.reset();
      }, error => {
        this.alert.error(Constants.MESSAGE_ERROR);
      });
    }
  }

}
