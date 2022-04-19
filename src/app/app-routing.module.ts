import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './home/category/category.component';
import { ElectronicsComponent } from './home/category/electronics/electronics.component';
import { JeweleryComponent } from './home/category/jewelery/jewelery.component';
import { ManComponent } from './home/category/man/man.component';
import { WomanComponent } from './home/category/woman/woman.component';
import { ShoppingComponent } from './home/shopping/shopping.component';

const routes: Routes = [
 
  
  // {
  //   path: 'category', component: CategoryComponent,
  //   children: [
  //       {
  //           path: 'woman', 
  //       component: WomanComponent
  //   },
  // ]
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
