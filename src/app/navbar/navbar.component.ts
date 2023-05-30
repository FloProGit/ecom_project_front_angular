import { Component } from '@angular/core';
import {animate, state, style, trigger, transition, query} from "@angular/animations";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  animations:[
    trigger('burgerButtonSpan1',[
    state('open', style({ transform: 'rotate(-135deg)' })),
      transition( 'close => open',animate('0.3s ease-out')),
      state('close', style({ transform: 'translateY(7px)' })),
      transition( 'open => close',animate('0.3s ease-out')),
  ]),
    trigger('burgerButtonSpan2',[
      state('open', style({ transform: 'rotate(135deg)' })),
      transition( 'close => open',animate('0.3s ease-out')),
      state('close', style({ transform: 'translateY(-7px)' })),
      transition( 'open => close',animate('0.3s ease-out')),
    ]),
    trigger('burgerButtonSpan3',[
      state('open', style({ opacity: 0 })),
      transition( 'close => open',animate('0.15s ease')),
      state('close', style({ opacity: 1 })),
      transition( 'open => close',animate('0.3s ease')),
    ]),
    trigger('burgerMenu',[
      state('open', style({ transform:'translateX(0)',opacity:1 })),
      transition( 'close => open',animate('0.3s ease')),
      state('close', style({transform:'translateX(-100%)',opacity:0 })),
      transition( 'open => close',animate('0.3s ease')),
    ])
  ]
})

// transition('open => close',[
//   query('.hamburger,:nth-child(1)',animate(1000, style({ transform: 'translateX(50px)' }))),
//   query('.hamburger,:nth-child(1)',animate(1000, style({ transform: 'translateX(50px)' }))),
//   // query('.hamburger,:nth-child(2)',animate(1000, style({ opacity: 0  }))),
//   // query('.hamburger,:nth-child(3)',animate(1000, style({ opacity: 0  }))),
//
// ]),
// transition('close => open',[
//   query('.hamburger,:nth-child(1)',animate(1000, style({ transform: 'translateX(-50px)' }))),
//   // query('.hamburger,:nth-child(2)',animate(1000, style({ opacity: 0  }))),
//   // query('.hamburger,:nth-child(3)',animate(1000, style({ opacity: 0  }))),
//
// ])
export class NavbarComponent {
  list_button=[
    {'name':"Button1", _id:1},
    {'name':"Button2", _id:2},
    {'name':"Button3", _id:3},
    {'name':"Button4", _id:4},
  ];

  burgerButtonOpen = 'close';
  goAnimate() {
    this.burgerButtonOpen =this.burgerButtonOpen == 'open'?'close':'open'  ;
    console.log(this.burgerButtonOpen)
  }

}
