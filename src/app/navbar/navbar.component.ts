import { Component } from '@angular/core';
import {animate, state, style, trigger,transition} from "@angular/animations";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  animations: [
    trigger('dimBox', [
      state('notDimmed',
        style({ transform: 'scale(0)'})
      ),
      state('dimmed',
        style({  transform: 'scale(1)' })
      ),
      transition('notDimmed => dimmed', [
        animate('0.5s')
      ]),
      transition('dimmed => notDimmed', [
        animate('1s')
      ])
    ])
  ]
})
export class NavbarComponent {
  isHover = false;

}
