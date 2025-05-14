import {Component, EventEmitter, input, Output, signal} from '@angular/core';
import {FaIconComponent} from "@fortawesome/angular-fontawesome";

@Component({
  selector: 'app-template-card',
  standalone: true,
  imports: [
    FaIconComponent
  ],
  templateUrl: './template-card.component.html'
})
export class TemplateCardComponent {
  title = input<string>();
  description = input<string>();
  badges = input<string[]>();
  isExpanded = signal<boolean>(false);

  @Output() expandClick = new EventEmitter<void>();

  toggleExpand(): void {
    this.expandClick.emit();
    this.isExpanded.update(current => !current);
  }
}
