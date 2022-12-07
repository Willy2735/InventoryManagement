import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent} from './componentes/login/login.component';
import { RegisterComponent} from './componentes/register/register.component';
import { HomepageComponent } from './componentes/homepage/homepage.component';
import { VentasComponent} from './componentes/ventas/ventas.component';

import { AddStoreComponent} from './componentes/add-store/add-store.component';

import { EditStoreComponent} from './componentes/edit-store/edit-store.component';

import { ArticuloComponent} from './componentes/articulo/articulo.component';

import { AddItemComponent} from './componentes/add-item/add-item.component';

import { EditItemComponent} from './componentes/edit-item/edit-item.component';
const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:'Register', component:RegisterComponent},
  {path:'user/:Uid', component:HomepageComponent},
  {path:'user/:Uid/Ventas', component:VentasComponent},
  
  {path:'user/:Uid/Ventas/Add', component:AddStoreComponent},
  {path:'Ventas', component:VentasComponent},
  
  {path:'Ventas/Add', component:AddStoreComponent},
  {path:'Ventas/Edit', component:EditStoreComponent},
  
  {path:'Articulos', component:ArticuloComponent},
  
  {path:'user/:Uid/Articulos', component:ArticuloComponent},
  
  {path:'user/:Uid/Articulos/Add', component:AddItemComponent},
  {path:'Articulos/Add', component:AddItemComponent},
  
  {path:'Articulos/Edit', component:EditItemComponent},
  
  {path:'user/:Uid/Articulos/Edit/:IDA', component:EditItemComponent},
  
  {path:'user/:Uid/Ventas/Edit/:IDA', component:EditStoreComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
