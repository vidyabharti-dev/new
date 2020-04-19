import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appTest]'
})
export class TestDirective {

  constructor() { }

@HostBinding('style.backgroundColor') bgColor;
@HostListener('click') onClickedPerforming(){
  this.bgColor='blue';
}



}
