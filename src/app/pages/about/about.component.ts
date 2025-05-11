import { Component } from '@angular/core';
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import {TranslatePipe} from "@ngx-translate/core";

@Component({
  selector: 'app-about',
  standalone: true,
    imports: [
        FaIconComponent,
        TranslatePipe
    ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

}
