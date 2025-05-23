import {computed, inject, Injectable, signal} from '@angular/core';
import {SkillCard} from "./skill-card/skill-card";
import {TranslateService} from "@ngx-translate/core";

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  private readonly translateService = inject(TranslateService);

  private readonly _visibleCount = signal(6);
  private readonly _allCards = signal<SkillCard[]>([]);

  readonly cards = computed(() => {
    const all = this._allCards();
    const count = this._visibleCount();
    return all.slice(0, count);
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

    this.translateService.get('skills.cards').subscribe(cardsTranslations => {
      const cards: SkillCard[] = Object.values(cardsTranslations).map((card: any, index) => ({
        name: card.name,
        category: card.category,
        description: card.description,
        experienceYears: card.experienceYears,
        icon: 'assets/icons/' + card.icon + '.svg',
      }));

      this._allCards.set(cards);
    });
  }

  showMore() {
    this._visibleCount.update(c => c + 6);
  }

  showLess() {
    this._visibleCount.set(6);
  }

  hasMore(): boolean {
    return this._visibleCount() < this._allCards().length;
  }
}
