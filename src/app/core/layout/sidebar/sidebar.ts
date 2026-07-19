import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
})
export class Sidebar {
  readonly navItems = [
    {
      label: 'Dashboard',
      route: '/dashboard',
      icon: 'pi pi-home',
    },
    {
      label: 'Users',
      route: '/users',
      icon: 'pi pi-users',
    },
  ];
}
