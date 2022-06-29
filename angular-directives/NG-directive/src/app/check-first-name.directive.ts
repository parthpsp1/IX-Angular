import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCheckFirstName]'
})
export class CheckFirstNameDirective {
  constructor(private el: ElementRef) {
    el.nativeElement.style.textDecoration = "underline";
  }
}
