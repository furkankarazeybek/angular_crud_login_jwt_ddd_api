import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { AuthService } from 'src/app/services/auth-service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-layout-default-pages',
  standalone: true,
  imports: [CommonModule, SidebarComponent, NavbarComponent, RouterModule],
  templateUrl: './layout-default-pages.component.html',
  styleUrl: './layout-default-pages.component.scss'
})
export class LayoutDefaultPagesComponent {
  userRole: string | null;

  constructor(private authService: AuthService) {
    this.userRole = this.authService.getRole(); 
    console.log("ROLE ID",this.userRole);
  }
}
