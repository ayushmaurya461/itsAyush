import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { routeAnimation } from './animations.module';
import { ChildrenOutletContexts, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [routeAnimation],
})
export class AppComponent {
  title = 'itsayush';
  quote = 'GET A QUOTE';
  @ViewChild('collapseButton') collapseButton!: ElementRef;
  public collapseIcon = 'assets/icons/left-arrow.png';

  constructor(
    private renderer: Renderer2,
    private contexts: ChildrenOutletContexts
  ) {}

  getRouteAnimationData(outlet: any) {
    return (
      outlet &&
      outlet.activatedRouteData &&
      outlet.activatedRouteData['animation']
    );
  }

  collapseSidebar() {
    const quote = document.querySelector('.quote');
    const sidebar = document.querySelector('.sidebar');
    const pages = document.querySelector('.pages');
    const container = document.querySelector('.container');
    if (sidebar?.classList.contains('show')) {
      this.renderer.addClass(sidebar, 'hide');
      this.renderer.removeClass(sidebar, 'show');
      this.renderer.removeClass(pages, 'sidebar-shown');
      this.renderer.addClass(pages, 'sidebar-hidden');
      this.renderer.setStyle(container, 'width', '100%');
      this.renderer.setStyle(container, 'padding', '100px 100px');
      this.collapseButton.nativeElement.children[0].src =
        'assets/icons/right-arrow.png';
    } else {
      this.renderer.addClass(sidebar, 'show');
      this.renderer.removeClass(sidebar, 'hide');
      this.renderer.removeClass(pages, 'sidebar-hidden');
      this.renderer.addClass(pages, 'sidebar-shown');
      this.renderer.setStyle(pages, 'transform', 'translateX(0)');
      this.renderer.addClass(quote, 'hidden');
      this.renderer.setStyle(container, 'width', '80%');
      this.renderer.setStyle(container, 'padding', '100px 50px');
      this.renderer.removeClass(quote, 'shown');
      this.collapseButton.nativeElement.children[0].src =
        'assets/icons/left-arrow.png';
    }
  }

  getAQuote() {
    const sidebar = document.querySelector('.sidebar');
    const pages = document.querySelector('.pages');
    const quote = document.querySelector('.quote');
    const container = document.querySelector('.container');

    if (quote?.classList.contains('hidden')) {
      this.renderer.addClass(quote, 'shown');
      this.renderer.removeClass(quote, 'hidden');
      this.renderer.addClass(sidebar, 'hide');
      this.renderer.removeClass(sidebar, 'show');
      this.renderer.removeClass(pages, 'sidebar-shown');
      this.renderer.setStyle(pages, 'transform', 'translateX(-18%)');
      this.renderer.addClass(pages, 'sidebar-hidden');
      this.quote = 'HIDE QUOTE';
      this.renderer.setStyle(container, 'width', '100%');
      this.renderer.setStyle(container, 'padding', '100px');
      this.collapseButton.nativeElement.children[0].src =
        'assets/icons/right-arrow.png';
    } else {
      this.renderer.addClass(quote, 'hidden');
      this.renderer.removeClass(quote, 'shown');
      this.renderer.addClass(sidebar, 'show');
      this.renderer.removeClass(sidebar, 'hide');
      this.renderer.removeClass(pages, 'sidebar-hidden');
      this.renderer.addClass(pages, 'sidebar-shown');
      this.quote = 'GET A QUOTE';
      this.renderer.setStyle(container, 'width', '80%');
      this.renderer.setStyle(container, 'padding', '100px 50px');
      this.renderer.setStyle(pages, 'transform', 'translateX(0)');
      this.collapseButton.nativeElement.children[0].src =
        'assets/icons/left-arrow.png';
    }
  }
}
