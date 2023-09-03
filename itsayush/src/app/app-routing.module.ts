import { NgModule } from '@angular/core';
import { RouterModule, Routes, provideRouter } from '@angular/router';
import { WriterComponent } from './writer/writer.component';
import { DeveloperComponent } from './developer/developer.component';
import { HomeComponent } from './home/home.component';
import { BiographyComponent } from './components/biography/biography.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ServicesComponent } from './components/services/services.component';
import { ContactComponent } from './components/contact/contact.component';
import { NewsComponent } from './components/news/news.component';
import { ApplicationConfig } from '@angular/platform-browser';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
    data: { animation: 'home' },
  },
  {
    path: 'writer',
    component: WriterComponent,
    data: { animation: 'writer' },
  },
  {
    path: 'developer',
    component: DeveloperComponent,
    data: { animation: 'developer' },
  },
  {
    path: 'biography',
    component: BiographyComponent,
    data: { animation: 'biography' },
  },
  {
    path: 'portfolio',
    component: PortfolioComponent,
    data: { animation: 'portfolio' },
  },
  {
    path: 'services',
    component: ServicesComponent,
    data: { animation: 'services' },
  },
  {
    path: 'contact',
    component: ContactComponent,
    data: { animation: 'contact' },
  },
  {
    path: 'news',
    component: NewsComponent,
    data: { animation: 'news' },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)],
};
