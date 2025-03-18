import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponent } from './components/shared.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NavContentComponent } from './components/navbar/nav-content/nav-content.component';
import { FooterComponent } from './components/footer/footer.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule } from '@angular/router';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { RatingsComponent } from './components/ratings/ratings.component';



@NgModule({
  declarations: [
    SharedComponent,
    NavbarComponent,
    NavContentComponent,
    FooterComponent,
    ProductCardComponent,
    RatingsComponent,
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    RouterModule
  ],
  exports:[
    SharedComponent,
    NavbarComponent,
    FooterComponent,
    ProductCardComponent,
    RatingsComponent
  ]
})
export class SharedModule { }
