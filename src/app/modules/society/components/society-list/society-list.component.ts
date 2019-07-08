import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Society } from '../../models/society';
import { SocietyService } from '../../services/society.service';

@Component({
  selector: 'app-society-list',
  templateUrl: './society-list.component.html',
  styleUrls: ['./society-list.component.css']
})
export class SocietyListComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  societies: Society[] = [];

  constructor(
    private route: ActivatedRoute,
    private societyService: SocietyService) { }
  
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

    this.societies = this.route.snapshot.data.resolveData.customers;

    this.societyService.getSocietys().subscribe((response: Society[]) => {
      this.societies = response;
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
