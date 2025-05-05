import {Component, inject, OnInit, Renderer2, signal} from '@angular/core';
import {RouterLink, RouterLinkActive} from "@angular/router";
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import {TranslatePipe, TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    RouterLink,
    FaIconComponent,
    TranslatePipe
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit{
  private readonly translate = inject(TranslateService);

  currentLang = signal<string>('en');
  flagUrl = signal<string>('https://flagcdn.com/w40/gb.png');
  currentTheme = signal<'abyss' | 'cupcake'>(
    (localStorage.getItem('theme') as 'abyss' | 'cupcake') ?? 'abyss'
  );

  ngOnInit(): void {
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
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  }

  updateFlag(lang: string) {
    this.flagUrl.set(
      lang === 'it'
        ? 'https://flagcdn.com/w40/it.png'
        : 'https://flagcdn.com/w40/gb.png'
    );
  }

  toggleLanguage() {
    const newLang = this.currentLang() === 'it' ? 'en' : 'it';
    this.currentLang.set(newLang);
    localStorage.setItem('lang', newLang);
    this.translate.use(newLang);
    this.updateFlag(newLang);
  }

}
