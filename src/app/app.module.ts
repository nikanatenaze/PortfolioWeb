import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './important-parts/navigation/navigation.component';
import { FooterComponent } from './important-parts/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ErrorComponent } from './pages/error/error.component';
import { HomeStartComponent } from './pages/home/home-components/start/home-start/home-start.component'
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HomeAboutComponent } from './pages/home/home-components/about/home-about/home-about.component';
import { HomeFeaturedComponent } from './pages/home/home-components/featured/home-featured/home-featured.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ProjectsComponent,
    ErrorComponent,
    HomeStartComponent,
    HomeAboutComponent,
    HomeFeaturedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
