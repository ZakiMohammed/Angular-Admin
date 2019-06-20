import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  dtOptions: DataTables.Settings = {};

  constructor() { }
  
  ngOnInit(): void {
    this.dtOptions = {
      ajax: 'http://172.16.1.161:8081/study/app-admin/api/customers.php',
      columns: [
        { title: 'ID', data: 'id' }, 
        { title: 'First Name', data: 'firstName' }, 
        { title: 'Last Name', data: 'lastName' },
        { title: 'Mobile', data: 'mobile' },
        { title: 'Email', data: 'email' },
        {
          render: (data, type, full, meta) => {
            return '<center><a href="/customers/1" class="btn btn-warning btn-sm">View</a></center>';
          }
        }

      ]
    };
  }

}
