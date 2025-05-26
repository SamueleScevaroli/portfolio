import {Component, EventEmitter, input, Output} from '@angular/core';
import {FaIconComponent} from "@fortawesome/angular-fontawesome";

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [
    FaIconComponent
  ],
  templateUrl: './project-card.component.html',
})
export class ProjectCardComponent {
  title = input<string>();
  description = input<string>();
  badges = input<string[]>();
  isExpanded = input<boolean | null>(false);

  @Output() expandClick = new EventEmitter<void>();

  toggleExpand(): void {
    this.expandClick.emit();
  }
}
