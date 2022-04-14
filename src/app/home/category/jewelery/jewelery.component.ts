import { Component, OnInit } from '@angular/core';
import { ClothesModel } from '../../shopping/clothes/clothes.model';
import { ClothesService } from '../../shopping/clothes/clothes.service';

@Component({
  selector: 'app-jewelery',
  templateUrl: './jewelery.component.html',
  styleUrls: ['./jewelery.component.css']
})
export class JeweleryComponent implements OnInit {

  clothesArray: ClothesModel[] = [];

  constructor(private cloth: ClothesService) { }

  ngOnInit(): void {
    this.cloth.getJew().subscribe(
      ( res) => {
         console.log(res);
         this.clothesArray = res;
       }, (error) => {
         console.log('Errore richiesta');
       }
     );
  }

}
