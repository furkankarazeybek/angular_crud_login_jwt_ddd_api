import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LayoutDefaultPagesComponent } from './components/layout-default-pages/layout-default-pages.component';
import { AuthGuard } from './services/AuthGuard';
import { UsersComponent } from './pages/users/users.component';
import { UpdateUserComponent } from './pages/update-user/update-user.component';


export const routes: Routes = [
 
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'signup',
    component: SignupComponent,
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
  {
    path: '',
    component: LayoutDefaultPagesComponent,
    canActivateChild: [AuthGuard],
    children: [
      { path: 'home', component: HomeComponent },
    ]
  },
  {
    path: '',
    component: LayoutDefaultPagesComponent,
    canActivateChild: [AuthGuard],
    children: [
      { path: 'users', component: UsersComponent },
    ]
  },
  {
    path: '',
    component: LayoutDefaultPagesComponent,
    canActivateChild: [AuthGuard],
    children: [
      { path: 'update-user/:id', component: UpdateUserComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
