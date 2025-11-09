import { Component } from '@angular/core';
import { GitHubService } from '../../services/GitHub/git-hub.service';

@Component({
  selector: 'app-about',
  standalone: false,
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
constructor(private service: GitHubService) {
    console.log('Service:', this.service);
  }

  ngOnInit(): void {
    this.getPersonData()
  }

  logData() {
    console.log(this.data);
    
  }

  public createdAt:any
  public data:any
  public years:any

  getPersonData() {
    this.service.getMyData().subscribe(
      (x: any) => {
        this.data = x;
        this.createdAt = x.created_at
        this.calculateYearsSinceCreated();
      },
      (error: any) => {
        console.error('Error fetching data', error);
        // Handle the error gracefully, e.g., show an error message to the user
      }
    );
  }

  calculateYearsSinceCreated() {
    const createdAtDate = new Date(this.createdAt);
    console.log(this.createdAt);
    
    const currentDate = new Date();
    
    let yearsDifference = currentDate.getFullYear() - createdAtDate.getFullYear();

    if (currentDate.getMonth() < createdAtDate.getMonth() || 
        (currentDate.getMonth() === createdAtDate.getMonth() && currentDate.getDate() < createdAtDate.getDate())) {
      yearsDifference--;
    }

    this.years = yearsDifference;
  }
}
