import { Component, OnInit, OnDestroy } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
import { Customer } from 'src/app/modules/customer/models/customer';
import { Subject } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit, OnDestroy {
 
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  customers: Customer[] = [];

  constructor(
    private route: ActivatedRoute,
    private customerService: CustomerService) { }
  
  ngOnInit(): void {

    this.dtOptions = {      
      pageLength: 10,
      columnDefs: [
        {
          targets: 0,
          orderable: false          
        }
      ]
    };

    this.customers = this.route.snapshot.data.resolveData.customers;

    this.customerService.getCustomers().subscribe((response: Customer[]) => {
      this.customers = response;
    }, (error) => {
      console.log('Error');
    }, () => {      
      this.dtTrigger.next();
    });
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

}
