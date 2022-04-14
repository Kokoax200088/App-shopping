import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  images = [
    "assets/carosello/car-zero.jpg",
    "assets/carosello/car-uno.jpg",
    "assets/carosello/car-due.jpg",
    "assets/carosello/car-tre.jpg"
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
