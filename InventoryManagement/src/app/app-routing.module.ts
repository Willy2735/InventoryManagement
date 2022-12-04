import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent} from './componentes/login/login.component';
import { RegisterComponent} from './componentes/register/register.component';

import { VentasComponent} from './componentes/ventas/ventas.component';

import { ArticuloComponent} from './componentes/articulo/articulo.component';
const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:'Register', component:RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
