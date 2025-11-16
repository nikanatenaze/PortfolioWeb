import { Component } from '@angular/core';
import { GitHubService } from '../../services/GitHub/git-hub.service';
import { ProjectCardData } from '../../classes/project-card-data';

@Component({
  selector: 'app-projects',
  standalone: false,
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent  {
  constructor(private service: GitHubService) {
    
  }

  Projects: ProjectCardData[] = []
  numer = 1

  ngOnInit(): void {
      this.service.getRepositories().subscribe((res:any[]) => {
        console.log(res);
        
      this.Projects = res.map(i => new ProjectCardData(this.SpaceMaker(i.name), i.description, i.private, i.svn_url, `https://lipsum.app/random/640x360?${Math.random()}`, i.language, i.created_at));
    });
  }

  SpaceMaker(str:string) {
     let st = str.split('-')
     return st.join(" ");
  }


  OpenLink(link: string): void {
    window.open(link, '_blank');  // opens in new tab
  }
}
