import { Component, OnInit, signal } from '@angular/core';
import { CommonModule, TitleCasePipe } from '@angular/common';
import { RouterModule } from '@angular/router';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterModule, TitleCasePipe],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header implements OnInit {
  // Use a signal for better performance in Angular 20
  navItems = signal<string[]>([]);

  ngOnInit(): void {
    // Extract the keys from the environment object
    const mfeKeys = Object.keys(environment.microFrontends);
    this.navItems.set(mfeKeys);
  }
}