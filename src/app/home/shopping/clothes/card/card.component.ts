import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClothesModel } from '../clothes.model';
import { ClothesService } from '../clothes.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() dress: ClothesModel;
  isPref = false;
  
  constructor() { }

  ngOnInit(): void {
     
  }

  getPref(){
    this.isPref = true;
    console.log(this.isPref);
  }

  removePref(){
    this.isPref = false;
  }

}
[]