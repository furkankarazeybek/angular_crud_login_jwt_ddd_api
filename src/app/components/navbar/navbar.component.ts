import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth-service';
import { LogoutService } from 'src/app/services/logout-service';
import { UserService } from 'src/app/services/user-service';
import { NotificationNavbarComponent } from '../notification-navbar/notification-navbar.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, NotificationNavbarComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  userInitials: string = ''; 
  userRole: string = '';
  userStatus: string = '';
  userSubStatus: string = '';

  isSubMenuOpen: boolean = false;

  isNotificationOpen: boolean = true;

  constructor(
    private logoutService: LogoutService,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    const userId = sessionStorage.getItem('userId');
  
    if (userId) {
      this.userService.getUserInfo(userId).subscribe(
        (user) => {
          this.userRole = `${user.user.roleId}`;
          console.log("User Role ID:", this.userRole);
        },
        (error) => {
          console.error('Error fetching user information', error);
        }
      );
      // Bu log, subscribe dışında olduğu için userRole undefined olabilir
    } else {
      console.error('User ID not found in session storage');
    }
  }


  toggleSettingsMenu() {
    this.isSubMenuOpen = !this.isSubMenuOpen;
  }

  toggleNotification() {
    this.isNotificationOpen = !this.isNotificationOpen;
  }


  logout(): void {
    this.logoutService.logout();
  }
}
