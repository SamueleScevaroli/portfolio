import {Component, inject} from '@angular/core';
import {TranslatePipe} from "@ngx-translate/core";
import {SkillsService} from "./skills.service";
import {SkillCardComponent} from "./skill-card/skill-card.component";

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [
    TranslatePipe,
    SkillCardComponent
  ],
  templateUrl: './skills.component.html'
})
export class SkillsComponent {
  private readonly service = inject(SkillsService);

  skills = this.service.cards;
  showMore = () => this.service.showMore();
  showLess = () => this.service.showLess();

  get hasMore() {
    return this.service.hasMore();
  }
}
