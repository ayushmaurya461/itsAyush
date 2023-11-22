import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { routeAnimation } from './animations.module';
import { ChildrenOutletContexts, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [routeAnimation],
})
export class AppComponent implements OnInit {
  title = 'itsayush';
  quote = 'GET A QUOTE';
  public screenSize: any;
  @ViewChild('collapseButton') collapseButton!: ElementRef;
  public collapseIcon = 'assets/icons/left-arrow.png';

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.screenSize = window.innerWidth;
  }

  constructor(
    private renderer: Renderer2,
    private contexts: ChildrenOutletContexts
  ) {}

  ngOnInit(): void {
    this.screenSize = window.innerWidth;
  }

  getRouteAnimationData(outlet: any) {
    return (
      outlet &&
      outlet.activatedRouteData &&
      outlet.activatedRouteData['animation']
    );
  }

  collapseSidebar() {
    if (this.screenSize > 991) {
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
  }

  getAQuote() {
    console.log(this.screenSize);
    if (this.screenSize > 991) {
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
        this.renderer.setStyle(pages, 'transform', 'translateX(0)');
        this.renderer.addClass(sidebar, 'show');
        this.renderer.removeClass(sidebar, 'hide');
        this.renderer.removeClass(pages, 'sidebar-hidden');
        this.renderer.addClass(pages, 'sidebar-shown');
        this.quote = 'GET A QUOTE';
        this.renderer.setStyle(container, 'width', '80%');
        this.renderer.setStyle(container, 'padding', '100px 50px');
        this.collapseButton.nativeElement.children[0].src =
          'assets/icons/left-arrow.png';
      }
    }
  }
}
