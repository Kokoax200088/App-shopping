import { Component, OnInit } from '@angular/core';
import { ClothesModel } from '../shopping/clothes/clothes.model';
import { ClothesService } from '../shopping/clothes/clothes.service';

@Component({
  selector: 'app-preferiti',
  templateUrl: './preferiti.component.html',
  styleUrls: ['./preferiti.component.css']
})
export class PreferitiComponent implements OnInit {

  clothesArray: ClothesModel[] = [];

  constructor(private cloth: ClothesService) { }

  ngOnInit(): void {
    this.cloth.getPref().subscribe(
     ( res) => {
        console.log(res);
        this.clothesArray = res;
      }, (error) => {
        console.log('Errore richiesta');
      }
    );
  }

}
