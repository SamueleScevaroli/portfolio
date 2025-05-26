import {Component, input} from '@angular/core';
import {TranslatePipe} from "@ngx-translate/core";
import {NgClass} from "@angular/common";
import {SkillCard} from "./skill-card";

@Component({
  selector: 'app-skill-card',
  standalone: true,
  imports: [
    TranslatePipe,
    NgClass
  ],
  templateUrl: './skill-card.component.html'
})
export class SkillCardComponent {
  card = input.required<SkillCard>();
}
