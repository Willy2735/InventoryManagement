import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {HttpClientModule} from '@angular/common/http';
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
import { ItemListComponent } from './componentes/item-list/item-list.component';
import { StoreListComponent } from './componentes/store-list/store-list.component';
import { AddItemComponent } from './componentes/add-item/add-item.component';
import { AddStoreComponent } from './componentes/add-store/add-store.component';
import { EditItemComponent } from './componentes/edit-item/edit-item.component';
import { EditStoreComponent } from './componentes/edit-store/edit-store.component';
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
    ItemFilterComponent,
    ItemListComponent,
    StoreListComponent,
    AddItemComponent,
    AddStoreComponent,
    EditItemComponent,
    EditStoreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
