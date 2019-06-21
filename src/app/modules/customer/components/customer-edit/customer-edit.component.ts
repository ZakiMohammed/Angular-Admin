import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, FormControl } from '@angular/forms';
import { Customer } from '../../models/customer';
import { CustomerService } from '../../services/customer.service';
import { Alert } from 'src/app/modules/shared/models/alert';
import { Constants } from 'src/app/modules/shared/helper/constants';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {

  id: number;
  fg: FormGroup;
  customer: Customer;
  alert: Alert;

  constructor(
    private builder: FormBuilder,
    private route: ActivatedRoute,
    private customerService: CustomerService) {
      this.id = this.route.snapshot.params.id || 0;    
      this.alert = new Alert(false, '', '');
      this.customer = new Customer();
  }

  get fc() { 
    return this.fg.controls; 
  }
  
  ngOnInit() {
    
    if (this.id) {
      this.customerService.getCustomer(this.id).subscribe((response) => {
        this.customer = response;
        this.fg = this.builder.group({
          firstName: [this.customer.firstName, [Validators.required, Validators.minLength(3)]],
          lastName: [this.customer.lastName, [Validators.required, Validators.minLength(3)]],
          mobile: [this.customer.mobile, [Validators.required, Validators.minLength(7)]],
          email: [this.customer.email, [Validators.required, Validators.email]]
        });
      }, (error) => {}, () => {});
    }
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
