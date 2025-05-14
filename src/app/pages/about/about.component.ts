import {Component} from '@angular/core';
import {TranslatePipe} from "@ngx-translate/core";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    TranslatePipe
  ],
  templateUrl: './about.component.html'
})
export class AboutComponent {

}
