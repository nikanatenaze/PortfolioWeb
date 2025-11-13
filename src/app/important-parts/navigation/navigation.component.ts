import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation',
  standalone: false,
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css'
})
export class NavigationComponent {
  public toggleSlideBar:any = "translateY(-1500px)"
  toggleSlide() {
    if(this.toggleSlideBar === "translateY(-1500px)") {
      this.toggleSlideBar = "translateY(1500px)"
    } else {
      this.toggleSlideBar = "translateY(-1500px)"
    }
    console.log('a')
  }
}
