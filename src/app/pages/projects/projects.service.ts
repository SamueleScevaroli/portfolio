import {computed, inject, Injectable, signal} from '@angular/core';
import {ProjectCard} from './project-card/project-card';
import {TranslateService} from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  private readonly translateService = inject(TranslateService);

  private readonly _allCards = signal<ProjectCard[]>([]);
  private readonly _visibleCount = signal(6);
  private readonly _expandedCard = signal<ProjectCard | null>(null);

  readonly expandedCard = this._expandedCard.asReadonly();
  readonly cards = computed(() => {
    const expanded = this._expandedCard();
    const all = this._allCards();
    const count = this._visibleCount();
    return expanded ? [expanded] : all.slice(0, count);
  });

  constructor() {
    this.translateService.onLangChange.subscribe(() => {
      this.loadTranslatedCards();
    });
    if (this.translateService.currentLang) {
      this.loadTranslatedCards();
    }
  }

  private loadTranslatedCards() {
    this.translateService.get('projects.cards').subscribe(cardsTranslations => {
      const cards: ProjectCard[] = Object.values(cardsTranslations).map((card: any, index) => ({
        title: card.title,
        description: card.desc,
        badges: JSON.parse(card.badges.replace(/'/g, '"')),
      }));

      this._allCards.set(cards);
    });
  }

  expandCard(card: ProjectCard) {
    const expanded = this._expandedCard();
    if (expanded === card) {
      this._expandedCard.set(null);
      this._visibleCount.set(6);
    } else {
      this._expandedCard.set(card);
      this._visibleCount.set(1);
    }
  }

  showMore() {
    this._visibleCount.update(c => c + 6);
  }

  showLess() {
    this._visibleCount.update(c => {
      if (c % 6 == 0) {
        return c - 6;
      } else {
        return c - c % 6;
      }
    });
  }

  hasMore(): boolean {
    return this._visibleCount() < this._allCards().length && this._expandedCard() === null;
  }
}
