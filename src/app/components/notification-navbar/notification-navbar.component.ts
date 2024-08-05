import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user-service';
import * as moment from 'moment';
import { LogoutService } from 'src/app/services/logout-service';

@Component({
  selector: 'app-notification-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './notification-navbar.component.html',
  styleUrl: './notification-navbar.component.scss',
})
export class NotificationNavbarComponent {
  userSubStatus: string = '';
  datePasswordExpire: string = '';
  notificationMessage: string = '';
  daysUntilPasswordExpires: number | null = null;
  datePasswordGenerated: string | null = null;
  notificationClass: string = '';

  constructor(
    private userService: UserService,
    private logoutService: LogoutService
  ) {}

  ngOnInit(): void {
    const userId = sessionStorage.getItem('userId');

    if (userId) {
      this.userService.getUserInfo(userId).subscribe(
        (user) => {
          this.userSubStatus = user.subStatus;

          this.daysUntilPasswordExpires = moment(
            user.passwordExpirationDays
          ).diff(moment(), 'days');

          this.datePasswordGenerated = moment(
            user.lastPasswordUpdateDate
          ).format('DD-MMM-YYYY');

          this.datePasswordExpire = moment(user.passwordExpirationDays).format(
            'DD-MMM-YYYY'
          );

          this.setNotificationMessageAndClass();
        },
        (error) => {
          console.error('Erro ao obter informações do usuário', error);
        }
      );
    } else {
      console.error('');
    }
  }

  private setNotificationMessageAndClass(): void {
    switch (this.userSubStatus) {
      case 'ON_ALERT':
        this.notificationMessage = `ON ALERT! Your password is about to expire, ${this.daysUntilPasswordExpires} days left. Please change your password manually to avoid being blocked. Expiration date: ${this.datePasswordExpire}`;
        this.notificationClass = 'alert-red';
        break;
      case 'IN_NON_COMPLIANCE':
        this.notificationMessage = `We verified that your password was reset via the system, on the date: ${this.datePasswordGenerated}. However, you haven't changed your password manually yet, after 7 calendar days your account will be blocked. Expiration date: ${this.datePasswordExpire}`;
        this.notificationClass = 'alert-orange';
        break;
      case 'BLOCKED':
        this.logoutService.logout();
        break;
      default:
        this.notificationMessage = 'You have no notifications.';
        this.notificationClass = '';
        break;
    }
  }
}
