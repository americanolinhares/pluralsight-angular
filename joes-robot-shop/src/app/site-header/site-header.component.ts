import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { ProductDetailsComponent } from '../product-details/product-details.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'bot-site-header',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, ProductDetailsComponent, CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './site-header.component.html',
  styleUrls: ['./site-header.component.css']
})
export class SiteHeaderComponent {

  constructor() { }

}
