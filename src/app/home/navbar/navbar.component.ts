import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }

  goHome(){
    this.router.navigate(['homepage']);
  }
  goShop(){
    this.router.navigate(['shopping']);
  }
  goCart(){
    this.router.navigate(['cart']);
  }
  goMe(){
    this.router.navigate(['me']);
  }

  goPref(){
    this.router.navigate(['prefe']);
  }

  goWoman(){
    this.router.navigate(['woman']);
  }

  goMan(){
    this.router.navigate(['man']);
  }

  goElet(){
    this.router.navigate(['elet']);
  }
  
  goJew(){
    this.router.navigate(['jew']);
  }


}
