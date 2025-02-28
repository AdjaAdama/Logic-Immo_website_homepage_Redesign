import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from "../footer/footer.component";
import { MatIconModule } from '@angular/material/icon';



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, MatSidenavModule, MatListModule, MatIconModule, HeaderComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  properties = [
    { title: 'Decouvrez maisons du monde', description: 'Inspirer à chacun l’envie de s’ouvrir au monde, pour créer ensemble des lieux de vie uniques, chaleureux et durables.', buttonLabel: 'Decouvrir', image: '../../assets/maisonsdumonde.jpg' },
    { title: 'Realisez vos projets avec Sofinco', description: 'Rénover votre logement, redécorer, ou aménager votre intérieur ? Sofinco vous propose des offres adaptées à vos besoins.', buttonLabel: 'Simuler voter projet', image: '../../assets/sofinco2.png' },
    { title: 'Redecouvrez votre espace de vie', description: 'VELUX, la lumière naturelle et l’air frais au service de votre habitat', buttonLabel: 'Decouvrir', image: '../../assets/velux.png' }
  ];

  trackProperty(index: number, property: any): number {
    return index; 
  }

}
