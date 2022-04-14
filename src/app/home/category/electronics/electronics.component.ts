import { Component, OnInit } from '@angular/core';
import { ClothesModel } from '../../shopping/clothes/clothes.model';
import { ClothesService } from '../../shopping/clothes/clothes.service';

@Component({
  selector: 'app-electronics',
  templateUrl: './electronics.component.html',
  styleUrls: ['./electronics.component.css']
})
export class ElectronicsComponent implements OnInit {

  clothesArray: ClothesModel[] = [];

  constructor(private cloth: ClothesService) { }

  ngOnInit(): void {
    this.cloth.getElect().subscribe(
      ( res) => {
         console.log(res);
         this.clothesArray = res;
       }, (error) => {
         console.log('Errore richiesta');
       }
     );
  }

}
