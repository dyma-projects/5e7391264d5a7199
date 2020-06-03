import { Directive, ElementRef, HostListener, OnInit} from '@angular/core';

@Directive({
  selector: '[appColorDirective]'
})
export class Color {

  constructor(private el: ElementRef) { }

  private changeColor(color : string){
    this.el.nativeElement.style.backgroundColor= color;
  }

   @HostListener('document:keyup', ['$event']) windowKeyup($event) {
      if($event.keyCode === 37) {
        this.changeColor('red');
      } else if($event.keyCode === 38 ){
        this.changeColor('blue');
      } else if($event.keyCode === 39 ){
        this.changeColor('yellow');
      } else if($event.keyCode === 40 ){
        this.changeColor('ORANGE');
      }
    console.log($event.keyCode);

   }
}
   

