import { Component, ElementRef, ViewChild, inject, signal } from '@angular/core';
import { FaIconComponent, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { fontAwesomeIcons } from './shared/font-awesome-icons';
import { AboutComponent } from './pages/about/about.component';
import { CvComponent } from './pages/cv/cv.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { TemplatesComponent } from './pages/templates/templates.component';
import { HomeComponent } from './pages/home/home.component';

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
    TemplatesComponent
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
  @ViewChild('templatesSection') templatesSection!: ElementRef<HTMLElement>;

  activeTab = signal<'homeSection' | 'aboutSection' | 'cvSection' | 'projectsSection' | 'templatesSection'>('homeSection');

  currentLang = signal<string>('en');
  flagUrl = signal<string>('https://flagcdn.com/w40/gb.png');
  currentTheme = signal<'abyss' | 'cupcake'>((localStorage.getItem('theme') as 'abyss' | 'cupcake') ?? 'abyss');

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
    const newTheme = isChecked ? 'cupcake' : 'abyss';
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

  scrollToSection(section: 'homeSection' | 'aboutSection' | 'cvSection' | 'projectsSection' | 'templatesSection') {
    this[section]?.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    this.activeTab.set(section);
  }
}
