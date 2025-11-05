import { Component, HostListener } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map, mergeMap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'PortfolioWeb';
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: Title
  ) {
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        map(() => {
          let route = this.activatedRoute;
          while (route.firstChild) route = route.firstChild;
          return route;
        }),
        mergeMap(route => route.data)
      )
      .subscribe(data => {
        const pageTitle = data['title'] ? `Natenadze Portfolio | ${data['title']}` : 'Natenadze Portfolio';
        this.titleService.setTitle(pageTitle);
      });
  }

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
