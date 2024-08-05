import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LogoutService {

  constructor(private router: Router) { }

  logout(): void {

    sessionStorage.removeItem('auth-token');
    sessionStorage.removeItem('username');

    this.router.navigate(['/login']);
  }
}