import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { importProvidersFrom } from '@angular/core';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './app/components/header/header.component';
import { ContentComponent } from './app/components/content/content.component';
import { FooterComponent } from './app/components/footer/footer.component';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes), 
    importProvidersFrom(CommonModule, MatSidenavModule, MatListModule)  // Importation des modules Angular Material et CommonModule
  ]
}).catch(err => console.error(err));
