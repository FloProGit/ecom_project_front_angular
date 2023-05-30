import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-images-carousel',
  templateUrl: './images-carousel.component.html',
  styleUrls: ['./images-carousel.component.css']

})
export class ImagesCarouselComponent {
  selectedIndex = 0;
  @Input() indicator = true;
  @Input() controls = true;
  @Input() autoSlide = false;
  @Input() slideInterval = 3000;
  ngOnInit(){
    if(this.autoSlide)
    {
      this.autoSlideImages();
    }
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
  urlImage = [
    'https://www.shutterstock.com/image-photo/young-potato-isolated-on-white-260nw-1029398878.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlf7rt4LggmhXjxPu0HfHXD91YYKqMel7VlLdZ5yXIC9cqyiMTC1DepsGe2WT8RZuVfoU&usqp=CAU',
    'https://st3.depositphotos.com/29384342/33978/i/450/depositphotos_339784130-stock-photo-vegetables-food-concept-potatoes.jpg'
  ]

 onPrevClick():void
 {
   this.selectedIndex--
   if(this.selectedIndex < 0){
     this.selectedIndex = this.urlImage.length-1
   }
 }
  onNextClick():void
  {
    this.selectedIndex++
    if(this.selectedIndex > this.urlImage.length-1){
      this.selectedIndex = 0
    }
  }
}
