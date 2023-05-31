import { Component } from '@angular/core';

@Component({
  selector: 'app-current-products',
  templateUrl: './current-products.component.html',
  styleUrls: ['./current-products.component.css']
})
export class CurrentProductsComponent {
  urlImage = [
    'https://www.shutterstock.com/image-photo/young-potato-isolated-on-white-260nw-1029398878.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlf7rt4LggmhXjxPu0HfHXD91YYKqMel7VlLdZ5yXIC9cqyiMTC1DepsGe2WT8RZuVfoU&usqp=CAU',
    'https://st3.depositphotos.com/29384342/33978/i/450/depositphotos_339784130-stock-photo-vegetables-food-concept-potatoes.jpg'
  ]
}
