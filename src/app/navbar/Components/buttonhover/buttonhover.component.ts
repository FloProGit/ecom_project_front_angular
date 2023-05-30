import { Component, Input } from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-buttonhover',
  templateUrl: './buttonhover.component.html',
  styleUrls: ['./buttonhover.component.css'],
  animations: [
    trigger('dimBox', [
      state('notDimmed',
        style({ transform: 'translateX(0)'})
      ),
      state('dimmed',
        style({  transform: 'translateX(100%)' })
      ),
      transition('* => *', [
        animate('250ms')
      ]),
    ])
  ]
})
export class ButtonhoverComponent {
  isHover = false;
  @Input() name = '';
}
