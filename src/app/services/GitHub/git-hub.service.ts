import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GitHubService {

  constructor(public api: HttpClient) { }

  getRepositories() {
    return this.api.get<any[]>("https://api.github.com/users/nikanatenaze/repos");
  }

  getRepositoryByName(name:string) {
    return this.api.get(`https://api.github.com/repos/nikanatenaze/${name}`)
  }

  getMyData() {
    return this.api.get(`https://api.github.com/users/nikanatenaze`)
  }
}
