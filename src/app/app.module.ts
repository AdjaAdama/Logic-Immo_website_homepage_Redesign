import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { HomeComponent } from './components/home/home.component';
import { routes } from './app.routes';  // Importer les routes définies dans app.routes.ts



@NgModule({
  imports: [BrowserModule, CommonModule, AppComponent, MatSidenavModule, MatListModule, RouterModule.forRoot(routes)],
  declarations: [HomeComponent]
})
export class AppModule { }
