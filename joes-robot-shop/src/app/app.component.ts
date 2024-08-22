import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { CatalogComponent } from "./catalog/catalog.component";
import { SiteHeaderComponent } from "./site-header/site-header.component";
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, CatalogComponent, SiteHeaderComponent, ProductDetailsComponent, CartComponent, CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'joes-robot-shop';
}
