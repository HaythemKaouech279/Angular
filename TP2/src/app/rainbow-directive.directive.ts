import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appRainbowDirective]'
})
export class RainbowDirectiveDirective {

  constructor() { }
  colors:string[]=["red","orange","yellow","green","blue","violet","black"];
  
  @HostBinding('style.color') color = '';
  @HostBinding('style.border') border='';

  @HostListener("input") logChange() {//onInput
    this.color=this.colors[Math.floor(Math.random()*6)];
    this.border="3px solid "+this.colors[Math.floor(Math.random()*6)];
  }

}
