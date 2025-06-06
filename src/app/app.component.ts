import {Component, ElementRef, inject, signal, ViewChild} from '@angular/core';
import {FaIconComponent, FaIconLibrary} from '@fortawesome/angular-fontawesome';
import {TranslatePipe, TranslateService} from '@ngx-translate/core';
import {fontAwesomeIcons} from './shared/font-awesome-icons';
import {AboutComponent} from './pages/about/about.component';
import {CvComponent} from './pages/cv/cv.component';
import {ProjectsComponent} from './pages/projects/projects.component';
import {HomeComponent} from './pages/home/home.component';
import {SkillsComponent} from "./pages/skills/skills.component";
import {NgStyle} from "@angular/common";
import {FadeInOnScrollDirective} from "./common/fade-in-on-scroll.directive";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    FaIconComponent,
    TranslatePipe,
    HomeComponent,
    AboutComponent,
    CvComponent,
    ProjectsComponent,
    SkillsComponent,
    NgStyle,
    FadeInOnScrollDirective
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  private readonly faIconLibrary = inject(FaIconLibrary);
  private readonly translate = inject(TranslateService);

  @ViewChild('homeSection') homeSection!: ElementRef<HTMLElement>;
  @ViewChild('aboutSection') aboutSection!: ElementRef<HTMLElement>;
  @ViewChild('cvSection') cvSection!: ElementRef<HTMLElement>;
  @ViewChild('projectsSection') projectsSection!: ElementRef<HTMLElement>;
  @ViewChild('skillsSection') skillsSection!: ElementRef<HTMLElement>;

  navItems: {
    section: 'aboutSection' | 'cvSection' | 'projectsSection' | 'skillsSection',
    label: string
  }[] = [
    {section: 'aboutSection', label: 'about.section.title'},
    {section: 'cvSection', label: 'cv.section.title'},
    {section: 'projectsSection', label: 'projects.section.title'},
    {section: 'skillsSection', label: 'skills.section.title'},
  ];

  currentLang = signal<string>('en');
  flagUrl = signal<string>('https://flagcdn.com/w40/gb.png');
  currentTheme = signal<'dim' | 'pastel'>((localStorage.getItem('theme') as 'dim' | 'pastel') ?? 'dim');

  ngOnInit(): void {
    this.faIconLibrary.addIcons(...fontAwesomeIcons);

    this.translate.addLangs(['en', 'it']);
    this.translate.setDefaultLang('en');

    const storedLang = localStorage.getItem('lang');
    const browserLang = this.translate.getBrowserLang();
    const lang = storedLang ?? (browserLang?.match(/en|it/) ? browserLang : 'en');

    this.translate.use(lang);
    this.currentLang.set(lang);
    this.updateFlag(lang);

    document.documentElement.setAttribute('data-theme', this.currentTheme());
  }

  toggleTheme(event: Event) {
    const isChecked = (event.target as HTMLInputElement).checked;
    const newTheme = isChecked ? 'pastel' : 'dim';
    this.currentTheme.set(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  }

  toggleLanguage() {
    const newLang = this.currentLang() === 'it' ? 'en' : 'it';
    this.translate.use(newLang);
    localStorage.setItem('lang', newLang);
    this.currentLang.set(newLang);
    this.updateFlag(newLang);
  }

  updateFlag(lang: string) {
    this.flagUrl.set(lang === 'it' ? 'https://flagcdn.com/w40/it.png' : 'https://flagcdn.com/w40/gb.png');
  }

  scrollToSection(section: 'homeSection' | 'aboutSection' | 'cvSection' | 'projectsSection' | 'skillsSection') {
    this[section]?.nativeElement.scrollIntoView({behavior: 'smooth', block: 'start'});
  }
}
