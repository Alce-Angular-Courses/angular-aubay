import { Directive, ElementRef, Input, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[abyDestacar]'
})
export class DestacarDirective implements OnInit{
  @Input() abyDestacar: string;
  
  constructor(private eTarget: ElementRef) {}

  ngOnInit() {
     this.eTarget.nativeElement
      .setAttribute('title',this.abyDestacar)
  }

  @HostListener('click') anular() {
    this.eTarget.nativeElement
    .setAttribute('title','Directiva anulada')
  }
}
