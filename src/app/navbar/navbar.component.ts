import {Component, ElementRef, HostListener} from '@angular/core';
import {animate, state, style, trigger, transition, query} from "@angular/animations";
import {TokenService} from "../coreService/token.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  animations: [
    trigger('burgerButtonSpan1', [
      state('open', style({transform: 'rotate(-135deg)'})),
      transition('close => open', animate('0.3s ease-out')),
      state('close', style({transform: 'translateY(7px)'})),
      transition('open => close', animate('0.3s ease-out')),
    ]),
    trigger('burgerButtonSpan2', [
      state('open', style({transform: 'rotate(135deg)'})),
      transition('close => open', animate('0.3s ease-out')),
      state('close', style({transform: 'translateY(-7px)'})),
      transition('open => close', animate('0.3s ease-out')),
    ]),
    trigger('burgerButtonSpan3', [
      state('open', style({opacity: 0})),
      transition('close => open', animate('0.15s ease')),
      state('close', style({opacity: 1})),
      transition('open => close', animate('0.3s ease')),
    ]),
    trigger('burgerMenu', [
      state('open', style({transform: 'translateX(0)', opacity: 1})),
      transition('close => open', animate('0.3s ease')),
      state('close', style({transform: 'translateX(-100%)', opacity: 0})),
      transition('open => close', animate('0.3s ease')),
    ])
  ]
})

export class NavbarComponent {

  isResize = false;

  constructor( private tokenService:TokenService) {

  }

  islogged = ()=>{ return this.tokenService.isLogged() };
  list_button = [
    {'name': "Products",'route':"/products" ,_id: 1},
  ];
  burgerButtonOpen = 'close';

  ngOnInit() {
    this.burgerButtonOpen = 'close';

    this.resizeBurger(window.innerWidth) ;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    const w = (event.target as Window).innerWidth;

      this.resizeBurger(w) ;

  }
  resizeBurger(width:number) {
    if (width > 900) {
      this.burgerButtonOpen = 'open';
    }
  }

  goAnimate() {
    this.burgerButtonOpen = this.burgerButtonOpen == 'open' ? 'close' : 'open';
  }

  logout()
  {
    this.tokenService.clearToken();
  }

}
