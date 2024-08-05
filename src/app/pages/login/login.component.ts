import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { InputComponent } from 'src/app/components/input/input.component';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login-service';
import { ToastrService } from 'ngx-toastr';
import { LoginLayoutComponent } from 'src/app/components/login-layout-component/login-layout.component';
import { UserService } from 'src/app/services/user-service';
import { CommonModule } from '@angular/common';
import { emailValidator } from 'src/app/validators/validador-indentity';

interface LoginForm {
  email: FormControl;
  password: FormControl;
}

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    InputComponent,
    LoginLayoutComponent,
    CommonModule,
  ],
  providers: [LoginService],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  loginForm!: FormGroup<LoginForm>;
  userSubStatus: string = '';
  boxAlertClass: string = '';
  messageAlert: string = '';

  constructor(
    private router: Router,
    private loginService: LoginService,
    private toastService: ToastrService,
    private userService: UserService
  ) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, emailValidator()]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }


  
  submit() {
    this.loginService.login(this.loginForm.value.email, this.loginForm.value.password)
      .subscribe({
        next: (response) => {
          if (response.status === 200) {
            this.router.navigate(['home']);
            console.log('Login successful');
            
          } else {
            this.toastService.error('Login failed');
          }
        },
        error: (err) => {
          console.error('Login error:', err);
          this.toastService.error('Unexpected error! Try again later');
        }
      });
  }
  

  navigate() {
    this.router.navigate(['signup']);
  }

  private setNotificationMessage(): void {
    switch (this.userSubStatus) {
      case 'BLOCKED':
        this.messageAlert =
          'Your account is temporarily blocked, please contact support via email: support@peoplehub.com.';
        this.boxAlertClass = 'alert-red';
        break;
      default:
        break;
    }
  }
}
