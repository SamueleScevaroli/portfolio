import {Component, input} from '@angular/core';
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import {TranslatePipe} from "@ngx-translate/core";
import {NgClass} from "@angular/common";
import {SkillCard} from "./skill-card";

@Component({
  selector: 'app-skill-card',
  standalone: true,
  imports: [
    FaIconComponent,
    TranslatePipe,
    NgClass
  ],
  templateUrl: './skill-card.component.html'
})
export class SkillCardComponent {
  card = input.required<SkillCard>();
}
