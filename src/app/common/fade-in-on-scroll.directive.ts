import {Directive, ElementRef, inject, OnInit} from '@angular/core';

@Directive({
  selector: '[appFadeInOnScroll]',
  standalone: true,
  host: {
    'class': 'opacity-0 transition-opacity duration-1200 delay-300',
  },
})
export class FadeInOnScrollDirective implements OnInit {
  private readonly el = inject(ElementRef);

  ngOnInit(): void {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          this.el.nativeElement.classList.add('opacity-100');
          observer.unobserve(this.el.nativeElement);
        }
      },
      {threshold: 0.1}
    );

    observer.observe(this.el.nativeElement);
  }

}
