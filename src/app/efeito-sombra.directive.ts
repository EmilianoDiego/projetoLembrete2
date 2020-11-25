import { Directive,Input,HostListener,HostBinding } from '@angular/core';

@Directive({
  selector: '[appEfeitoSombra]'
})
export class EfeitoSombraDirective {

  @Input('appSombraTela')sombraEntrada:string;

  @HostBinding('style.boxShadow')sombra:string;
 
  @HostListener('mouseover')quandoMouseCima(){
    this.sombra=this.sombraEntrada;
  }
  @HostListener('mouseleave')quandoMouseSair(){
    this.sombra="";
  }

}
