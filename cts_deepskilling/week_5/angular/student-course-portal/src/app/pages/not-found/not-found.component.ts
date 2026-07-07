import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="container" style="text-align:center; padding:4rem 1rem">
      <h1 style="font-size:5rem; color:#1976d2">404</h1>
      <h2>Page Not Found</h2>
      <p style="margin:1rem 0; color:#666">The page you are looking for does not exist.</p>
      <a routerLink="/" class="btn-primary" style="padding:0.75rem 1.5rem; display:inline-block; text-decoration:none; border-radius:4px; background:#1976d2; color:white">
        Go Home
      </a>
    </div>
  `
})
export class NotFoundComponent {}
