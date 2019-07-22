import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SaludoComponent } from './saludo/saludo.component';



@NgModule({
  declarations: [
    HomeComponent, 
    SaludoComponent],
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
