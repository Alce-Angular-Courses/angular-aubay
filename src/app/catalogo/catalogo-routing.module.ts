import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CatalogoComponent } from './catalogo.component';
import { DetalleComponent } from './detalle/detalle.component';
import { AuthGuard } from '../guards/auth.guard';


const routes: Routes = [
  { path: '', component: CatalogoComponent },
  { path: 'detalle/:id', 
    component: DetalleComponent,
    canActivate: [AuthGuard]
   },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatalogoRoutingModule { }
