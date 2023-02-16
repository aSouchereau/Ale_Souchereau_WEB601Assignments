import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appHoverEffect]'
})
export class HoverEffectDirective {

  private el: HTMLElement;

  @Input() appHoverEffect: string = '';

  constructor(el: ElementRef) {
    this.el = el.nativeElement;
  }

  @HostListener('mouseover') onMouseEnter() {
    if (this.appHoverEffect === 'underline') {
      this.underlineText('underline');
    } else if (this.appHoverEffect === 'bold') {
      this.boldText('bolder');
    } else return;
  }

  @HostListener('mouseleave') onMouseExit() {
    if (this.appHoverEffect === 'underline') {
      this.underlineText('');
    } else if (this.appHoverEffect === 'bold') {
      this.boldText('');
    } else return;
  }

  private underlineText(value: string) {
    this.el.style.textDecoration = value;
  }

  private boldText(value: string) {
    this.el.style.fontWeight = value;
  }



}
