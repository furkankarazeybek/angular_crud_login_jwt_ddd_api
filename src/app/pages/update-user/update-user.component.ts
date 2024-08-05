import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user-service';

@Component({
  selector: 'app-update-user',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss']
})
export class UpdateUserComponent implements OnInit {
  userId: string = '';
  user: any = {
    name: '',
    surname: '',
    email: ''
  };

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private router: Router 

  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.userId = id;
      this.loadUser();
    } else {
      console.error('No user ID found in the route parameters.');
    }
  }

  loadUser(): void {
    this.userService.getUserInfo(this.userId).subscribe(
      (response) => {
        this.user = {
          name: response.user.name,
          surname: response.user.surname,
          email: response.user.email
        };
        console.log('User loaded:', this.user);
      },
      (error) => {
        console.error('Error loading user:', error);
      }
    );
  }

  updateUser(): void {
    this.userService.updateUser(this.userId, this.user).subscribe(
      (response) => {
        alert('Kullanıcı güncellendi');
        this.router.navigateByUrl('/users'); // Ekranı yenilemek için uygun bir rota belirleyin
      },
      (error) => {
        console.error('Error updating user:', error);
      }
    );
  }
}
