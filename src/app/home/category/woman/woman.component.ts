import { Component, OnInit } from '@angular/core';
import { ClothesModel } from '../../shopping/clothes/clothes.model';
import { ClothesService } from '../../shopping/clothes/clothes.service';

@Component({
  selector: 'app-woman',
  templateUrl: './woman.component.html',
  styleUrls: ['./woman.component.css']
})
export class WomanComponent implements OnInit {

  clothesArray: ClothesModel[] = [];

  constructor(private cloth: ClothesService) { }

  ngOnInit(): void {
    this.cloth.getWomen().subscribe(
      ( res) => {
         console.log(res);
         this.clothesArray = res;
       }, (error) => {
         console.log('Errore richiesta');
       }
     );
  }
}
