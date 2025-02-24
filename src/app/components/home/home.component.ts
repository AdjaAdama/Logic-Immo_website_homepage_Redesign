import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, MatSidenavModule, MatListModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  properties = [
    { title: 'Appartement à Paris', price: '750 000', image: '../../assets/depositphotos_21515189-stock-photo-agent-with-house-model-and.jpg' },
    { title: 'Villa à Nice', price: '1 200 000', image: '../../assets/maison.jpg' },
    { title: 'Maison à Lyon', price: '500 000', image: '../../assets/maisonminiat.jpg' }
  ];

  trackProperty(index: number, property: any): number {
    return index;
  }
}
