import { Component } from '@angular/core';
import { GitHubService } from '../../services/GitHub/git-hub.service';

@Component({
  selector: 'app-projects',
  standalone: false,
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent  {
  constructor(private service: GitHubService) {
    
  }

  Projects: any
  ngOnInit(): void {
    this.Projects = this.service.getRepositories().subscribe((x:any) => {
      this.Projects = x;
      console.log(this.Projects);
    })
  }
}
