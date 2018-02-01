import { Router } from '@angular/router';
import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  constructor(public authService: AuthService, private router: Router) {
  }

  loginWithGoogle(): void {
    this.authService.loginWithGoogle().then(() => {
      this.router.navigate(['/main']);
    });
  }
}
