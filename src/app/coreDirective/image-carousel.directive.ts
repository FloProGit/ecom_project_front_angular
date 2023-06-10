import {Directive, TemplateRef} from '@angular/core';

@Directive({
  selector: '[ImageCarousel]'
})
export class ImageCarouselDirective {
  constructor(public tpl:TemplateRef<any>) { }
}
