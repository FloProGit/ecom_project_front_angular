import { Component } from '@angular/core';
import {animate, state, style, trigger, transition, query} from "@angular/animations";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  animations:[
    trigger('burgerButton',[
      transition('open => close',[
        query('.hamburger,:nth-child(1)',animate(1000, style({ transform: 'translateX(5px)' }))),
        query('.hamburger,:nth-child(2)',animate(1000, style({ transform: 'translateX(5px)' }))),
        query('.hamburger,:nth-child(3)',animate(1000, style({ transform: 'translateX(5px)' }))),

      ]),
      transition('close => open',[
        query('.hamburger,:nth-child(1)',animate(1000, style({ transform: 'translateX(-5px)' }))),
        query('.hamburger,:nth-child(2)',animate(1000, style({ transform: 'translateX(-5px)' }))),
        query('.hamburger,:nth-child(3)',animate(1000, style({ transform: 'translateX(-5px)' }))),

      ])
    ])



  ]
})
export class NavbarComponent {
  list_button=[
    {'name':"Button1", _id:1},
    {'name':"Button2", _id:2},
    {'name':"Button3", _id:3},
    {'name':"Button4", _id:4},
  ];

  burgerButtonOpen = 'open';
  goAnimate() {
    this.burgerButtonOpen =this.burgerButtonOpen == 'open'?'close'  ;
  }

}
