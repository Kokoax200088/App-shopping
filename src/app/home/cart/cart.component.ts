import { Component, OnInit, Output } from '@angular/core';
import { ClothesComponent } from '../shopping/clothes/clothes.component';
import { ClothesModel } from '../shopping/clothes/clothes.model';
import { ClothesService } from '../shopping/clothes/clothes.service';
import { CartModel } from './cart.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  vestArray: ClothesModel[] = [];

  constructor(private cloth: ClothesService) { }

  ngOnInit(): void {
    this.cloth.getLimit().subscribe(
      ( res) => {
         console.log(res);
         this.vestArray = res;
       }, (error) => {
         console.log('Errore richiesta');
       }
     );

  }

}
