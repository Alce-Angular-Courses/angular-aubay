import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import localeEs from '@angular/common/locales/es'
import { registerLocaleData } from '@angular/common';

registerLocaleData(localeEs);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
    AppRoutingModule,
    CoreModule,
    SharedModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es' }],
  exports: [], 
  bootstrap: [AppComponent]
})
export class AppModule { }
