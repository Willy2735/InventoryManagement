import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './componentes/header/header.component';
import { ArticuloComponent } from './componentes/articulo/articulo.component';
import { HomepageComponent } from './componentes/homepage/homepage.component';
import { VentasComponent } from './componentes/ventas/ventas.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegisterComponent } from './componentes/register/register.component';
import { EditComponent } from './componentes/edit/edit.component';
import { DeleteComponent } from './componentes/delete/delete.component';
import { StoreSquareComponent } from './componentes/store-square/store-square.component';
import { AddComponent } from './componentes/add/add.component';
import { ItemSquareComponent } from './componentes/item-square/item-square.component';
import { ItemFilterComponent } from './componentes/item-filter/item-filter.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ArticuloComponent,
    HomepageComponent,
    VentasComponent,
    LoginComponent,
    RegisterComponent,
    EditComponent,
    DeleteComponent,
    StoreSquareComponent,
    AddComponent,
    ItemSquareComponent,
    ItemFilterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
