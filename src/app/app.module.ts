import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './home/navbar/navbar.component';
import { HomepageComponent } from './home/homepage/homepage.component';
import { CarouselComponent } from './home/homepage/carousel/carousel.component';
import { SezioniComponent } from './home/homepage/sezioni/sezioni.component';
import { FooterComponent } from './home/footer/footer.component';
import { ShoppingComponent } from './home/shopping/shopping.component';
import { ClothesComponent } from './home/shopping/clothes/clothes.component';
import { CardComponent } from './home/shopping/clothes/card/card.component';
import { HttpClientModule } from '@angular/common/http';
import { ClothesService } from './home/shopping/clothes/clothes.service';
import { MepageComponent } from './home/mepage/mepage.component';
import { CategoryComponent } from './home/category/category.component';
import { WomanComponent } from './home/category/woman/woman.component';
import { ElectronicsComponent } from './home/category/electronics/electronics.component';
import { JeweleryComponent } from './home/category/jewelery/jewelery.component';
import { ManComponent } from './home/category/man/man.component';
import { CartComponent } from './home/cart/cart.component';
import { CardcartComponent } from './home/cart/cardcart/cardcart.component';
import { PreferitiComponent } from './home/preferiti/preferiti.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomepageComponent,
    CarouselComponent,
    SezioniComponent,
    FooterComponent,
    ShoppingComponent,
    ClothesComponent,
    CardComponent,
    MepageComponent,
    CategoryComponent,
    WomanComponent,
    ElectronicsComponent,
    JeweleryComponent,
    ManComponent,
    CartComponent,
    CardcartComponent,
    PreferitiComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [ClothesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
