import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { AboutComponent } from './pages/about/about.component';
import { ErrorComponent } from './pages/error/error.component';
import { Title } from '@angular/platform-browser';

const routes: Routes = [
  {path: "", component: HomeComponent, data: {title: "Home"}},
  {path: "home", component: HomeComponent, data: {title: "Home"}},
  {path: "projects", component: ProjectsComponent, data: {title: "Projects"}},
  {path: "about", component: AboutComponent, data: {title: "About"}},
  {path: "**", component: ErrorComponent, data: {title: "404"}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
