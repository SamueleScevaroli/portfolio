import {Component, ElementRef, signal, ViewChild} from '@angular/core';
import {TranslatePipe} from "@ngx-translate/core";

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './projects.component.html'
})
export class ProjectsComponent {
  @ViewChild('slide1') slide1!: ElementRef<HTMLElement>;
  @ViewChild('slide2') slide2!: ElementRef<HTMLElement>;
  @ViewChild('slide3') slide3!: ElementRef<HTMLElement>;

  activeTab = signal<string>('slide1');

  scrollToSection(slide: 'slide1' | 'slide2' | 'slide3') {
    this[slide]?.nativeElement.scrollIntoView({behavior: 'smooth', block: 'nearest'});
    this.activeTab.set(slide);
  }


}
