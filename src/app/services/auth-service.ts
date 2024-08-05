import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private user = {
    first_name: '',
    last_name: '',
    email: '',
    roleId: '',
    status: ''
  };

  constructor() {}

  setUser(firstName: string, lastName: string, email: string, roleId: string, status: string): void {
    this.user.first_name = firstName;
    this.user.last_name = lastName;
    this.user.email = email;
    this.user.roleId = roleId;
    this.user.status = status;
    console.log(firstName);
  }

  getFirstName(): string {
    return this.user.first_name;
  }

  getLastName(): string {
    return this.user.last_name;
  }

  getEmail(): string {
    return this.user.email;
  }

  getRole(): string | null  {
    const role_id = sessionStorage.getItem('roleId');
    return role_id !== null ? role_id : null;
  }

  getStatus(): string {
    return this.user.status;
  }

  isAuthenticated(): boolean {
    const authToken = sessionStorage.getItem('auth-token');
    return !!authToken;
  }

  getUsername(): string | null {
    const username = sessionStorage.getItem('username');
    return username !== null ? username : null;
  }
}
