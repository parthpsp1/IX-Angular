import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appAge]'
})
export class AgeDirective {

  constructor(private element_ref: ElementRef) {
    element_ref.nativeElement.style.textColor = "red";
  }
}
