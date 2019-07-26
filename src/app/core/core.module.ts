import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { ErrorComponent } from './error/error.component';

@NgModule({
  declarations: [
    HeaderComponent, 
    FooterComponent, 
    MenuComponent, ErrorComponent],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    HeaderComponent, 
    FooterComponent, ErrorComponent]
})
export class CoreModule { }
