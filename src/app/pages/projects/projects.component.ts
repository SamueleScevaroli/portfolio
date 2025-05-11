import {Component, ElementRef, signal, ViewChild} from '@angular/core';
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import {TranslatePipe} from "@ngx-translate/core";

@Component({
  selector: 'app-projects',
  standalone: true,
    imports: [
        FaIconComponent,
        TranslatePipe
    ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  @ViewChild('slide1') slide1!: ElementRef<HTMLElement>;
  @ViewChild('slide2') slide2!: ElementRef<HTMLElement>;
  @ViewChild('slide3') slide3!: ElementRef<HTMLElement>;

  activeTab = signal<'slide1' | 'slide2' | 'slide3'>('slide1');

  scrollToSection(slide: 'slide1' | 'slide2' | 'slide3') {
    this[slide]?.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    this.activeTab.set(slide as 'slide1' | 'slide2' | 'slide3');
  }


}
