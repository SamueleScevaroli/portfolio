import {Component, inject} from '@angular/core';
import {TranslatePipe} from "@ngx-translate/core";
import {ProjectCard} from "./project-card/project-card";
import {NgClass} from "@angular/common";
import {ProjectCardComponent} from "./project-card/project-card.component";
import {ProjectsService} from "./projects.service";

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [TranslatePipe, NgClass, ProjectCardComponent],
  templateUrl: './projects.component.html'
})
export class ProjectsComponent {
  private readonly service = inject(ProjectsService);

  cards = this.service.cards;
  expandedCard = this.service.expandedCard;
  showMore = () => this.service.showMore();
  showLess = () => this.service.showLess();
  onExpandClick = (card: ProjectCard) => this.service.expandCard(card);

  get hasMore() {
    return this.service.hasMore();
  }
}
