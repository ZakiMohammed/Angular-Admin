import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/modules/shared/services/auth.service';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.css']
})
export class ShellComponent implements OnInit {

  constructor(
    private router: Router,
    private auth: AuthService) { }

  ngOnInit() {
  }

  onLogoutClick($event: any) {
    this.auth.onLogout();
    this.router.navigate(['/login']);
  }

}
