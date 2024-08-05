import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user-service';
import { Router } from '@angular/router'; // Import if you're using router

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  name: string = '';
  surname: string = ''
  email: string = '';
  userRole: string = '';  
  users: any[] = [];
  

  constructor(private userService: UserService, private router: Router) { }
  // users
  ngOnInit(): void {
    this.userService.getAllUsers().subscribe(
      (response) => {
        this.users = response; // Adjust based on actual response structure
        console.log('All Users:', this.users);
      },
      (error) => {
        console.error('Error fetching users:', error);
      }
    );

    // role 
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

  

  onEdit(userId: string): void {
    
    this.router.navigate(['/update-user', userId]); 
  }

  onDelete(userId: string): void {
    if (confirm('Are you sure you want to delete this user?')) {
      this.userService.deleteUser(userId).subscribe(
        () => {
          this.users = this.users.filter(user => user._id !== userId); 
          console.log('User deleted successfully');
        },
        (error) => {
          console.error('Error deleting user:', error);
        }
      );
    }
  }
}
