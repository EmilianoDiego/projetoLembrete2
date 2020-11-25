import { Directive,HostListener,Renderer2,ElementRef} from '@angular/core';

@Directive({
  selector: '[appEfeitoSombra]'
})
export class EfeitoSombraDirective {

  constructor(
    private elementRef:ElementRef,
    private renderer:Renderer2
  ) {}

   @HostListener('mouseover')quandoMousePorCima(){
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      'box-shadow','2px 3px'
    )
  }
  @HostListener('mouseleave')quandoMouseSair(){
    this.renderer.removeStyle(
      this.elementRef.nativeElement,
      'box-shadow')
  }
}
