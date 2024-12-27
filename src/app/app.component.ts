import { Component, ElementRef, Inject, OnInit, Renderer2, ViewChild } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./nav-bar/nav-bar.component";
import { ProductListComponent } from "./product/product-list/product-list.component";
import { HomeComponent } from './home/home.component';
import { filter } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { Location, DOCUMENT } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, HomeComponent, ProductListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  [x: string]: any;
  private _router: Subscription = new Subscription();
  @ViewChild(NavbarComponent, { static: false}) navbar!: NavbarComponent;

  constructor( private renderer : Renderer2, private router: Router, @Inject(DOCUMENT,) private document: any, private element : ElementRef, public location: Location) {}
  ngOnInit() {
      var navbar : HTMLElement = this.element.nativeElement.children[0].children[0];
      this._router = this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe((event: NavigationEnd) => {
          if (window.outerWidth > 991) {
              window.document.children[0].scrollTop = 0;
          }else{
            if(window.document.activeElement){
              window.document.activeElement.scrollTop = 0;
            }
          }
          this.navbar.sidebarClose();
      });
      var ua = window.navigator.userAgent;
      var trident = ua.indexOf('Trident/');
      var version: number | undefined;
      if (trident > 0) {
          // IE 11 => return version number
          var rv = ua.indexOf('rv:');
          version = parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
      }
      if (version) {
          var body = document.getElementsByTagName('body')[0];
          body.classList.add('ie-background');

      }

  }
  removeFooter() {
      var titlee = this.location.prepareExternalUrl(this.location.path());
      titlee = titlee.slice( 1 );
      if(titlee === 'signup' || titlee === 'nucleoicons'){
          return false;
      }
      else {
          return true;
      }
  }
}