import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WriterComponent } from './writer/writer.component';
import { DeveloperComponent } from './developer/developer.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { BiographyComponent } from './components/biography/biography.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ServicesComponent } from './components/services/services.component';
import { NewsComponent } from './components/news/news.component';
import { ContactComponent } from './components/contact/contact.component';
import { GetAQuoteComponent } from './shared/get-a-quote/get-a-quote.component';

@NgModule({
  declarations: [
    AppComponent,
    WriterComponent,
    DeveloperComponent,
    FooterComponent,
    HomeComponent,
    SidebarComponent,
    BiographyComponent,
    PortfolioComponent,
    ServicesComponent,
    NewsComponent,
    ContactComponent,
    GetAQuoteComponent,
  ],
  imports: [BrowserModule, BrowserAnimationsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
