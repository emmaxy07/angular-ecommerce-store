import { Directive, Renderer2, OnInit, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCartBtn]'
})
export class CartBtnDirective implements OnInit {

  constructor(private elRef: ElementRef ,private renderer: Renderer2) { }

  ngOnInit(): void {
    this.renderer.setStyle(this.elRef.nativeElement,
      'height', '35px');
    this.renderer.setStyle(this.elRef.nativeElement,
      'border', 'none');
    this.renderer.setStyle(this.elRef.nativeElement, 'margin-top', '10px');
    this.renderer.setStyle(this.elRef.nativeElement, 'color', 'white');
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'coral');
    this.renderer.setStyle(this.elRef.nativeElement, 'border-radius', '5px');
    this.renderer.setStyle(this.elRef.nativeElement, 'cursor', 'pointer');
  }

   @HostListener('mouseenter') mouseover(eventData: Event){
      this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'black');
   }
  
   @HostListener('mouseleave') mouseleave(eventData: Event){
      this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'coral');
    }

}
