import {
  AfterViewInit,
  Component,
  ContentChildren,
  ElementRef,
  Input,
  QueryList,
  ViewChild,
  ViewChildren
} from '@angular/core';
import {ImageCarouselDirective} from "../../coreDirective/image-carousel.directive";
import {CarouselItemElementDirective} from "../../coreDirective/carousel-item-element.directive";
import {animate, AnimationBuilder, AnimationFactory, AnimationPlayer, style} from "@angular/animations";
@Component({
  selector: 'app-images-carousel',
  templateUrl: './images-carousel.component.html',
  styleUrls: ['./images-carousel.component.css']

})
export class ImagesCarouselComponent implements AfterViewInit{
  selectedIndex = 0;
  @Input() indicator = true;
  @Input() controls = true;
  @Input() autoSlide = true;
  @Input() slideInterval = 3000;
  public arrayOfCarousel !:ImageCarouselDirective[];
  private player!: AnimationPlayer;
  @ContentChildren(ImageCarouselDirective) urlImage!:QueryList<ImageCarouselDirective>;
  @ViewChildren(CarouselItemElementDirective) itemsElement!:QueryList<ElementRef>;
  @ViewChild('carousel') private carousel!: ElementRef;
  constructor(private builder:AnimationBuilder) {
  }
  ngAfterViewInit() {
    this.arrayOfCarousel = this.urlImage.toArray();
    this.urlImage.reset([this.arrayOfCarousel[0]]) ;
  }
  ngOnInit(){
    if(this.autoSlide)
    {
      this.autoSlideImages();
    }
  }

  private buildAnimation( timer :string|null,offset : number) :AnimationFactory{

     return this.builder.build(animate(timer == null?'1s ease-out':timer,style({transform: `translateX(${offset}px)` })))
  }

  autoSlideImages():void
  {
    setInterval(()=>{
      this.onNextClick()
    },this.slideInterval);
  }
  selectImage(index:number){
    this.selectedIndex = index;
  }

  getIndex(direction:number):number
  {
    let sign:string = direction + Math.abs(direction) > 0 ? 'pos':'neg';
    let result : number =0;
    console.log(sign);
    switch (sign){
      case 'pos' :{ result =(this.selectedIndex + direction) % this.arrayOfCarousel.length;break}
      case 'neg' :{ result =(this.selectedIndex + direction + this.arrayOfCarousel.length) % this.arrayOfCarousel.length;break}
    }
    return result;
  }
 onPrevClick():void
 {
   this.selectedIndex = this.getIndex(-1)

   let arr: ImageCarouselDirective[] = this.urlImage.toArray();
   let last:ImageCarouselDirective = this.arrayOfCarousel[this.selectedIndex]!;
   arr = [last].concat(arr);
   this.urlImage.reset(arr)

   this.player = this.buildAnimation('0s',-700).create(this.carousel.nativeElement);
   this.player.play();
   let slideAnimation = this.buildAnimation(null,0).create(this.carousel.nativeElement);
   slideAnimation.play();
   slideAnimation.onDone(()=>{
     let last:ImageCarouselDirective = this.arrayOfCarousel[this.selectedIndex]!;
     this.urlImage.reset([last])
     this.player = this.buildAnimation('0s',0).create(this.carousel.nativeElement);
     this.player.play();
   })
 }
  onNextClick():void
  {

    this.selectedIndex = this.getIndex(1)

    let arr: ImageCarouselDirective[] = this.urlImage.toArray();
    let first:ImageCarouselDirective = this.arrayOfCarousel[this.selectedIndex]!;
    arr = arr.concat(first);
    this.urlImage.reset(arr)

    this.player = this.buildAnimation('0s',0).create(this.carousel.nativeElement);
    this.player.play();
    let slideAnimation = this.buildAnimation(null,-700).create(this.carousel.nativeElement);
    slideAnimation.play();
    slideAnimation.onDone(()=>{
      let last:ImageCarouselDirective = this.arrayOfCarousel[this.selectedIndex]!;
      this.urlImage.reset([last])
      this.player = this.buildAnimation('0s',0).create(this.carousel.nativeElement);
      this.player.play();
    })

  }
}
