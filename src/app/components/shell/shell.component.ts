import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.css']
})
export class ShellComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onLogoutClick($event: any) {
    localStorage.clear();
    this.router.navigate(['/login']);
  }

}
