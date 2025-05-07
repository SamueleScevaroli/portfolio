import {Component, ElementRef, signal, ViewChild} from '@angular/core';
import {NgClass} from "@angular/common";
import {TranslatePipe} from "@ngx-translate/core";

@Component({
  selector: 'app-cv',
  standalone: true,
  imports: [
    NgClass,
    TranslatePipe
  ],
  templateUrl: './cv.component.html',
  styleUrl: './cv.component.scss'
})
export class CvComponent {
  @ViewChild('section1') section1!: ElementRef<HTMLElement>;
  @ViewChild('section2') section2!: ElementRef<HTMLElement>;
  @ViewChild('section3') section3!: ElementRef<HTMLElement>;
  @ViewChild('section4') section4!: ElementRef<HTMLElement>;

  activeTab = signal<'section1' | 'section2' | 'section3' | 'section4'>('section1');

  scrollToSection(section: 'section1' | 'section2' | 'section3' | 'section4') {
    this[section]?.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    this.activeTab.set(section as 'section1' | 'section2' | 'section3' | 'section4');
  }

  isActive(tab: string): boolean {
    return this.activeTab() === tab;
  }
}
