import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  public links = [
    {
      image: 'assets/icons/linkedin.png',
      title: 'LinkedIn',
      url: '',
    },
    {
      image: 'assets/icons/github.png',
      title: 'Github',
      url: '',
    },
    {
      image: 'assets/icons/instagram.png',
      title: 'Instagram',
      url: '',
    },
    {
      image: 'assets/icons/email.png',
      title: 'Email',
      url: '',
    },
  ];
}
