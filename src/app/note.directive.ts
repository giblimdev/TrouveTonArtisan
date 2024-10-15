//note.directive.ts
import {
  Directive,
  ElementRef,
  Input,
  OnChanges,
  Renderer2,
  SimpleChanges,
} from '@angular/core';

@Directive({
  selector: '[appNote]',
  standalone: true,
})
export class NoteDirective {
  @Input() note: string = '';

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['note']) {
      const width = `${parseInt(this.note) * 20}px`;
      this.renderer.setStyle(this.el.nativeElement, 'width', width);
    }
  }
}
