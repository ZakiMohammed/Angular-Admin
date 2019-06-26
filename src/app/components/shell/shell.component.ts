import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';
import { AuthService } from 'src/app/modules/shared/services/auth.service';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.css']
})
export class ShellComponent implements OnInit {

  loading: boolean;

  constructor(
    private router: Router,
    private auth: AuthService) { 
      router.events.subscribe((routerEvent: any) => {
        this.checkRouterEvent(routerEvent);
      });
    }

  ngOnInit() {
  }

  onLogoutClick($event: any) {
    this.auth.onLogout();
    this.router.navigate(['/login']);
  }

  checkRouterEvent(routerEvent: Event): void {
    if (routerEvent instanceof NavigationStart) {
      console.log('NavigationStart');
      this.loading = true;
    }
    if (routerEvent instanceof NavigationEnd ||
        routerEvent instanceof NavigationCancel ||
        routerEvent instanceof NavigationError) {
      this.loading = false;
    }
  }

}
