import { Component } from '@angular/core';
import { GitHubService } from '../../services/GitHub/git-hub.service';
import { Language } from '../../classes/language';

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

  languages: Language[] = [
    new Language("HTML", "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis ratione molestiae magnam dolorum deleniti vel.", "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png"),
    new Language("CSS", "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis ratione molestiae magnam dolorum deleniti vel.", "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/340px-CSS3_logo_and_wordmark.svg.png"),
    new Language("Java Script", "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis ratione molestiae magnam dolorum deleniti vel.", "https://repository-images.githubusercontent.com/539560750/278d0bbf-6aaf-4f38-a18f-e328305bcd7b"),
    new Language("Type Script", "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis ratione molestiae magnam dolorum deleniti vel.", "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Typescript.svg/1024px-Typescript.svg.png"),
    new Language("C#", "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis ratione molestiae magnam dolorum deleniti vel.", "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/C_Sharp_Logo_2023.svg/1024px-C_Sharp_Logo_2023.svg.png"),
    new Language("SQL", "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis ratione molestiae magnam dolorum deleniti vel.", "https://codevisionz.com/wp-content/uploads/2024/04/sql-logo.png"),
    new Language("Python", "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis ratione molestiae magnam dolorum deleniti vel.", "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png"),
  ]

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
