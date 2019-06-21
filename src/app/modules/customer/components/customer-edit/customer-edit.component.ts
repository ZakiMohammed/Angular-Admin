import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, FormControl } from '@angular/forms';
import { Customer } from '../../models/customer';
import { CustomerService } from '../../services/customer.service';
import { Alert } from 'src/app/modules/shared/models/alert';
import { Constants } from 'src/app/modules/shared/helper/constants';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {

  fg: FormGroup;
  alert: Alert;

  constructor(
    private builder: FormBuilder,
    private customerService: CustomerService) {
      this.alert = new Alert(false, '', '');
  }

  get fc() { return this.fg.controls; }
  
  ngOnInit() {
    this.fg = this.builder.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.minLength(3)]],
      mobile: ['', [Validators.required, Validators.minLength(7)]],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onSubmit() {
    if (this.fg.valid) {
      let customer = new Customer();
      let dto = {...customer, ...this.fg.value};
      this.customerService.postCustomer(dto).then(response => {
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
