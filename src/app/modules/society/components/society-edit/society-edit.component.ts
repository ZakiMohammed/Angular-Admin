import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, FormControl } from '@angular/forms';
import { Society } from '../../models/society';
import { SocietyService } from '../../services/society.service';
import { Alert } from 'src/app/modules/shared/models/alert';
import { Constants } from 'src/app/modules/shared/helper/constants';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-society-edit',
  templateUrl: './society-edit.component.html',
  styleUrls: ['./society-edit.component.css']
})
export class SocietyEditComponent implements OnInit {

  id: number;
  fg: FormGroup;
  society: Society;
  alert: Alert;

  constructor(
    private builder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private societyService: SocietyService) {
      this.id = +this.route.snapshot.params.id || 0;    
      this.alert = new Alert(false, '', '');
      this.society = new Society();
  }

  get fc() { 
    return this.fg.controls; 
  }
  
  ngOnInit() {
    
    if (this.id !== 0) {
      this.society = this.route.snapshot.data.resolveData.society;
      
      // this.societyService.getSociety(this.id).subscribe((response) => {
      //   this.society = response;        
      // }, (error) => {}, () => {
      //   this.initializeForm();
      // });
    }
    this.initializeForm();
  }

  initializeForm() {
    this.fg = this.builder.group({
      name: [this.society.name, [Validators.required, Validators.minLength(3)]],
      displayName: [this.society.displayName, [Validators.required, Validators.minLength(3)]],
      address1: [this.society.address1, [Validators.required, Validators.minLength(7)]],
      address2: [this.society.address2],
      city: [this.society.city],
      state: [this.society.state],
      country: [this.society.country],
      pinCode: [this.society.pinCode],
      contactNo: [this.society.contactNo],
      active: [this.society.active],
    });
  }

  onSubmit() {
    if (this.fg.valid) {
      let society = new Society();
      let dto = {...society, ...this.fg.value};
      if (this.id === 0) {
        this.societyService.postSociety(dto).then(response => {
          if (response.status) {
            this.alert.success(Constants.MESSAGE_SUBMITED);
            setTimeout(() => {
              this.router.navigate(['/societies']);
            }, 3000);
          } else {
            this.alert.success(Constants.MESSAGE_ERROR);
          }
          this.fg.reset();
        }, error => {
          this.alert.error(Constants.MESSAGE_ERROR);
        });
      } else {
        this.societyService.updateSociety(this.id, dto).then(response => {
          if (response.status) {
            this.alert.success(Constants.MESSAGE_SUBMITED);
            setTimeout(() => {
              this.router.navigate(['/societies']);
            }, 3000);
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

}
