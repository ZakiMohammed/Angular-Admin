import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
import { ActivatedRoute } from '@angular/router';
import { Customer, CustomerResolved } from 'src/app/modules/customer/models/customer';

@Component({
  selector: 'app-customer-view',
  templateUrl: './customer-view.component.html',
  styleUrls: ['./customer-view.component.css']
})
export class CustomerViewComponent implements OnInit {

  id: number = 0;
  customer: Customer;

  constructor(
    private route: ActivatedRoute,
    private customerService: CustomerService) { 
      this.id = this.route.snapshot.params.id;
      this.customer = new Customer();
    }

  ngOnInit() {

    this.customer = this.route.snapshot.data.resolveData.customer;

    // console.log(this.id);
    // this.customerService.getCustomer(this.id).subscribe((response: Customer) => {
    //   this.customer = response;
    // }, (error) => {
    //   console.log('Error');
    // }), () => {};
  }

}
