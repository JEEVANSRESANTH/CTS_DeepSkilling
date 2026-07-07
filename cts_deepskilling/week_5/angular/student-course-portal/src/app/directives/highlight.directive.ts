import { Directive, ElementRef, HostListener, Input } from '@angular/core';

// HO-3 Task 3: Custom attribute directive with configurable highlight color
@Directive({ selector: '[appHighlight]', standalone: true })
export class HighlightDirective {
  // HO-3 Task 3: Configurable color via @Input
  @Input() appHighlight = 'yellow';

  constructor(private el: ElementRef) {}

  // HO-3 Task 3: @HostListener binds to host element events
  @HostListener('mouseenter') onMouseEnter() {
    this.el.nativeElement.style.backgroundColor = this.appHighlight;
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.style.backgroundColor = '';
  }
}
