import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(public authService: AuthService, private router: Router) { }

  logOut(event): void {
    event.preventDefault();
    event.stopPropagation();

    this.authService.logOut().then(() => {
      this.router.navigate(['/main']);
    });
  }
}
