import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DestacarDirective } from './destacar.directive';
import { TruncatePipe } from './truncate.pipe';

@NgModule({
  declarations: [
    DestacarDirective,
    TruncatePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DestacarDirective,
    TruncatePipe
  ]
})
export class SharedModule { }
