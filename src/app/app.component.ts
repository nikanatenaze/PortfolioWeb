import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'PortfolioWeb';

  // navigation slide logic
  lastScrollY = 0;
  @HostListener('window:scroll', [])
  onScroll(): void {
    const navbar = document.getElementById('Nav');
    if (!navbar) return;
    if (window.scrollY > this.lastScrollY) {
      navbar.classList.add('Hidden-Nav');
    } 
    else {
      navbar.classList.remove('Hidden-Nav');
    }

    this.lastScrollY = window.scrollY;
  }
}
