import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HeaderProfileComponent } from 'src/app/components/header-profile/header-profile.component';
import { NavbarComponent } from 'src/app/components/navbar/navbar.component';
import { SidebarComponent } from 'src/app/components/sidebar/sidebar.component';
import { AuthService } from 'src/app/services/auth-service';
import { UserService } from 'src/app/services/user-service';

@Component({
  selector: 'app-user-auth',
  standalone: true,
  imports: [CommonModule, SidebarComponent, NavbarComponent, HeaderProfileComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  name: string = '';
  surname: string = ''
  email: string = '';
  userRole: string = '';  

  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
    const userId = sessionStorage.getItem('userId');
  
    if (userId) {
      this.userService.getUserInfo(userId).subscribe(
        (user) => {
          this.name =  user.user.name;
          this.surname =  user.user.surname;
          this.email =  user.user.email;

          this.userRole =  user.user.roleId;


          if(this.userRole === "669f6e3e4267d941da2163a0") {
            this.userRole = "ADMIN";
          }
          else{
            this.userRole = "USER";
          }
          console.log("bu user role", this.userRole)
        },
        (error) => {
          console.error('Error', error);
        }
      );
    } else {
      console.error('');
    }
  }


}