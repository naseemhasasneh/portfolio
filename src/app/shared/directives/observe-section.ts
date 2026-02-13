import { Directive, ElementRef, Input, OnDestroy, OnInit } from '@angular/core';
import { ScrollSpy } from '../../core/services/scrollspy';


@Directive({
  selector: '[appObserveSection]',
  standalone: true,
})
export class ObserveSectionDirective implements OnInit, OnDestroy {
  @Input('appObserveSection') id!: string;

  private io?: IntersectionObserver;

  constructor(private el: ElementRef<HTMLElement>, private spy: ScrollSpy) {}

  ngOnInit(): void {
    this.io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            this.spy.setActive(this.id);
            this.el.nativeElement.classList.add('in-view');
          }
        }
      },
      { root: null, rootMargin: '-35% 0px -55% 0px', threshold: 0.01 }
    );

    this.io.observe(this.el.nativeElement);
  }

  ngOnDestroy(): void {
    this.io?.disconnect();
  }
}