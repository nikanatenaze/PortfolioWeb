import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { GitHubService } from '../../../../../services/GitHub/git-hub.service';

@Component({
  selector: 'app-home-featured',
  standalone: false,
  templateUrl: './home-featured.component.html',
  styleUrl: './home-featured.component.css'
})
export class HomeFeaturedComponent {

  // constructor(private services:GitHubService) {}

  // ngOnInit(): void {
  //   this.getData();
  // }
  // private data:any
  // private filtred:any

  // getData() {
  //   this.services.getRepositories()
  //   .subscribe((x:any) => {
  //     this.data = x
  //   })
  // }

  // fillter(){
  //   let array = []
  //   this.data.array.forEach((repo:any) => {
  //     if(repo.name == "Pet-shop") {
  //       array.push(repo)
  //     }
  //   });
  // }
}
