import { Component, Input, OnInit } from '@angular/core';
import { ClothesModel } from '../../shopping/clothes/clothes.model';
import { CartModel } from '../cart.model';

@Component({
  selector: 'app-cardcart',
  templateUrl: './cardcart.component.html',
  styleUrls: ['./cardcart.component.css']
})
export class CardcartComponent implements OnInit {
  @Input() vest: ClothesModel;

  

  constructor() { }

  ngOnInit(): void {
  }

  quant = Math.floor((Math.random() * 6) + 1);

}
