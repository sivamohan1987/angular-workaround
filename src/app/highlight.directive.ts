import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  highlightElement: any;
  @Input() highlightColor: string;
  constructor(el: ElementRef) {
    this.highlightElement = el.nativeElement;
    this.highlightColor = this.highlightColor || '#C0C0C0';
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlightElement.style.backgroundColor = this.highlightColor;
    this.highlightElement.style.cursor = "pointer";
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlightElement.style = null;
  }

}
