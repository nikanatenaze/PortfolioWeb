import { Component, OnInit } from '@angular/core';
import { GitHubService } from '../../../../../services/GitHub/git-hub.service';
import { Data } from '@angular/router';

@Component({
  selector: 'app-home-start',
  standalone: false,
  templateUrl: './home-start.component.html',
  styleUrl: './home-start.component.css'
})
export class HomeStartComponent implements OnInit {

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
      (error) => {
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
