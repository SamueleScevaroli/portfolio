import { Component } from '@angular/core';
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import {TranslatePipe} from "@ngx-translate/core";
import {TemplateCardComponent} from "./template-card/template-card.component";

@Component({
  selector: 'app-templates',
  standalone: true,
  imports: [
    FaIconComponent,
    TranslatePipe,
    TemplateCardComponent
  ],
  templateUrl: './templates.component.html',
  styleUrl: './templates.component.scss'
})
export class TemplatesComponent {

}
