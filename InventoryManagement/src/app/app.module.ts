import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './componentes/header/header.component';
import { ArticuloComponent } from './componentes/articulo/articulo.component';
import { HomepageComponent } from './componentes/homepage/homepage.component';
import { VentasComponent } from './componentes/ventas/ventas.component';
import { LoginComponent } from './componentes/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ArticuloComponent,
    HomepageComponent,
    VentasComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
