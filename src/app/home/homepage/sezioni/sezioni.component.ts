import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-sezioni',
  templateUrl: './sezioni.component.html',
  styleUrls: ['./sezioni.component.css']
})
export class SezioniComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goWoman(){
    this.router.navigateByUrl('/woman');
  }

  goMan(){
    this.router.navigate(['/man']);
  }

  goElet(){
    this.router.navigate(['elet']);
  }
  
  goJew(){
    this.router.navigate(['jew']);
  }

}
