import {Component} from '@angular/core';
import {TranslatePipe} from "@ngx-translate/core";
import {TemplateCardComponent} from "./template-card/template-card.component";
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-templates',
  standalone: true,
  imports: [
    TranslatePipe,
    TemplateCardComponent,
    NgClass
  ],
  templateUrl: './templates.component.html',
  styleUrls: ['./templates.component.scss']
})
export class TemplatesComponent {

  cards = [
    {title: 'Template 1', description: 'Description 1', badges: ['Java', 'Angular'], isExpanded: false},
    {title: 'Template 2', description: 'Description 2', badges: ['Java', 'React'], isExpanded: false},
    {title: 'Template 3', description: 'Description 3', badges: ['Java', 'Vue'], isExpanded: false},
    {title: 'Template 1', description: 'Description 1', badges: ['Java', 'Angular'], isExpanded: false},
    {title: 'Template 2', description: 'Description 2', badges: ['Java', 'React'], isExpanded: false},
    {title: 'Template 3', description: 'Description 3', badges: ['Java', 'Vue'], isExpanded: false}
  ];

  onExpandClick(card: any) {
    card.isExpanded = !card.isExpanded;
  }
}
