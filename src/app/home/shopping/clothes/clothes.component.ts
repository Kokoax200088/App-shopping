import { Component, OnInit } from '@angular/core';
import { ClothesModel } from './clothes.model';
import { ClothesService } from './clothes.service';

@Component({
  selector: 'app-clothes',
  templateUrl: './clothes.component.html',
  styleUrls: ['./clothes.component.css']
})
export class ClothesComponent implements OnInit {

  clothesArray: ClothesModel[] = [];

  constructor(private cloth: ClothesService) { }

  ngOnInit(): void {
    this.cloth.getClothes().subscribe(
     ( res) => {
        console.log(res);
        this.clothesArray = res;
      }, (error) => {
        console.log('Errore richiesta');
      }
    );
  }

}
